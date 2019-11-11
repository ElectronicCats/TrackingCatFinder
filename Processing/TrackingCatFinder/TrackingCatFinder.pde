/************************************************************
  Tracking Cat Finder 1.0.0
  Cat Finder - Rover Educativo
  Andrés Sabas @ Electronic Cats
  Original Creation Date: Nov 10, 2019
  https://github.com/ElectronicCats/Cat_Finder

  Este ejemplos demuestra como recibir los datos de los sensores y funcionalidad
  basica del Cat Finder Kit de Rover Educativo
  http://electroniccats.com

  Este código es beerware si tu me ves ( o cualquier otro miembro de Electronic Cats)
  a nivel local, y tu has encontrado nuestro código útil ,
  por favor comprar una ronda de cervezas!

  Distribuido como; no se da ninguna garantía.
************************************************************/

import http.requests.*;
import controlP5.*;

ControlP5 cp5;

int coordenadaX01;
int coordenadaY02;

float x=0;

Knob perilladeHumedad;
Knob perilladeBarometro;
Knob perilladeTemp;
Knob perilladeTVOC;
Knob perilladeCO2;

float hum = 0;
float pre = 0;
float tem = 0;
float CO2 = 0;
float TVOC = 0;
float ax = 0;
float ay = 0;
float az = 0;
float gx = 0;
float gy = 0;
float gz = 0;
float mx = 0;
float my = 0;
float mz = 0;

public void setup() 
{
  size(1000,600);// creamos ventana de 700 por 400 pixeles
  smooth();
  
  cp5 = new ControlP5(this);
  coordenadaX01 = width-160;
  perilladeHumedad = cp5.addKnob ("Humedad")
              .setRange(-55, 90)
              .setValue(0)
              .setPosition(coordenadaX01,40)
              .setRadius(50)
              .setColorForeground(color(255, 200, 57))
              .setColorBackground(color(255, 0, 0))
              ;
     cp5 = new ControlP5(this);
     perilladeTemp = cp5.addKnob ("Temperatura")
              .setRange(-55, 90)
              .setValue(0)
              .setPosition(coordenadaX01,160)
              .setRadius(50)
              .setColorForeground(color(30, 144, 255))
              .setColorBackground(color(78, 29, 126))
              ;
             
     cp5 = new ControlP5(this);
     perilladeBarometro = cp5.addKnob ("Presión")
              .setRange(800, 850)
              .setValue(0)
              .setPosition(coordenadaX01,280)
              .setRadius(50)
              .setColorForeground(color(0, 144, 70))
              .setColorBackground(color(78, 234, 12))
;
      cp5 = new ControlP5(this);
     perilladeTVOC = cp5.addKnob ("TVOC")
              .setRange(-55, 90)
              .setValue(0)
              .setPosition(coordenadaX01,400)
              .setRadius(50)
              .setColorForeground(color(80, 234, 80))
              .setColorBackground(color(200, 234, 12))
              ;
     cp5 = new ControlP5(this);
     perilladeCO2 = cp5.addKnob ("CO2")
              .setRange(-55, 90)
              .setValue(0)
              .setPosition(coordenadaX01,400)
              .setRadius(50)
              .setColorForeground(color(80, 234, 80))
              .setColorBackground(color(200, 234, 12))
              ;
}

void draw() {
  background(255,100,100);
  GetRequest get = new GetRequest("http://192.168.4.1/data");
  get.send();
  
  println("Reponse Content: " + get.getContent());
  
  //println("Reponse Content-Length Header: " + get.getHeader("Content-Length"));
  String data = get.getContent();
  if (data != null ) {
    String ss  = data.substring(58,data.length()-6);
    String[] list = split(ss, ',');
    
    hum = float(list[0]);
    println("Humedad: " + hum);
    perilladeHumedad.setValue(hum);
    
    tem = float(list[1]);
    println("Presion: " + pre);
    perilladeBarometro.setValue(pre);
    
    tem = float(list[2]);
    perilladeTemp.setValue(tem);
    println("Temperatura: " + tem);
    
    CO2 = float(list[3]);
    perilladeCO2.setValue(CO2);
    println("CO2: " + CO2);
    
    TVOC = float(list[4]);
    println("TVOC: " + TVOC);
     perilladeTVOC.setValue(TVOC);
     
    ax = float(list[5]);
    println("magnetómetro x: " + ax);
    ay = float(list[6]);
    println("magnetómetro y: " + ay);
    az = float(list[7]);
    println("magnetómetro z: " + az);
    gx = float(list[8]);
    println("aceleración x: " + gx);
    gy = float(list[9]);
    println("aceleración y: " + gy);
    gz = float(list[10]);
    println("aceleración z: " + gz);
    mx= int(list[11]);
    println("giroscopio x: " + mx);
    my= int(list[12]);
    println("giroscopio y: " + my);
    mz= int(list[13]);
    println("giroscopio z: " + mz);
    */
  }
  
}
