#include "ESP8266WiFi.h";
#include "ESP8266WebServer.h";
#include "ArduinoJson.h";
#include "Servo.h";

const char *ssid = "*******";
const char *password = "*******";

ESP8266WebServer server(80);

const int SERVO_PIN = D1;

const int MOTOR_CC_PIN1 = D2;
const int MOTOR_CC_PIN2 = D3;

Servo steeringServo;

int currentAngle = 90;

const int ANGLE_INCREMENT = 5;

void setup()
{
     Serial.begin(115200);

     steeringServo.attach(SERVO_PIN);
     steeringServo.write(currentAngle);

     pinMode(MOTOR_CC_PIN1, OUTPUT);
     pinMode(MOTOR_CC_PIN2, OUTPUT);

     WiFi.begin(ssid, password);
     while (WiFi.status() != WL_CONNECTED)
     {
          delay(1000);
          Serial.println("Conectando ao WiFi...");
     }
     Serial.println("Conectado ao WiFi");
     Serial.print("IP: ");
     Serial.println(WiFi.localIP());

     server.on("/move", HTTP_POST, handleMove);

     server.begin();
     Serial.println("Servidor HTTP iniciado");
}

void loop()
{
     server.handleClient();
}

void handleMove()
{
     if (server.hasArg("plain"))
     {
          String body = server.arg("plain");
          DynamicJsonDocument doc(1024);
          deserializeJson(doc, body);

          String direction = doc["direction"];
          int speed = doc["speed"];

          if (direction == "forward")
          {
               moveForward(speed);
          }
          else if (direction == "backward")
          {
               moveBackward(speed);
          }
          else if (direction == "left")
          {
               turnLeft();
          }
          else if (direction == "right")
          {
               turnRight();
          }
          else if (direction == "stop")
          {
               stopMotors();
          }
          else if (direction == "center")
          {
               centerSteering();
          }

          server.send(200, "application/json", "{\"status\":\"success\",\"currentAngle\":" + String(currentAngle) + "}");
     }
     else
     {
          server.send(400, "application/json", "{\"status\":\"error\",\"message\":\"No data received\"}");
     }
}

void moveForward(int speed)
{
     analogWrite(MOTOR_CC_PIN1, speed);
     digitalWrite(MOTOR_CC_PIN2, LOW);
}

void moveBackward(int speed)
{
     digitalWrite(MOTOR_CC_PIN1, LOW);
     analogWrite(MOTOR_CC_PIN2, speed);
}

void turnLeft()
{
     if (currentAngle > 45)
     {
          currentAngle -= ANGLE_INCREMENT;
          steeringServo.write(currentAngle);
     }
}

void turnRight()
{
     if (currentAngle < 135)
     {
          currentAngle += ANGLE_INCREMENT;
          steeringServo.write(currentAngle);
     }
}

void centerSteering()
{
     currentAngle = 90;
     steeringServo.write(currentAngle);
}

void stopMotors()
{
     digitalWrite(MOTOR_CC_PIN1, LOW);
     digitalWrite(MOTOR_CC_PIN2, LOW);
}