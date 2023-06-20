int pinoSensor = 7;
long idSensor = 200000;

void setup() {
  pinMode(pinoSensor, INPUT);
  Serial.begin(9600);
}

void loop() {
  Serial.print(idSensor);
  Serial.print(";");
  if(digitalRead(pinoSensor) == LOW) {
    Serial.println("1");
  } else {
    Serial.println("0");
  }
  delay(5000);
}
