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
  idSensor = idSensor + 1;
  if (idSensor == 200010) {
    idSensor = 200000;
    delay(10000);
  }
  delay(100);
}
