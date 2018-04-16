import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { hardwarePart } from '../../_models/part';
import 'rxjs/add/operator/map';

import { Chart } from 'chart.js';
import { debug } from 'util';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit, AfterViewInit {
  modalRef: BsModalRef;

  // our parts
  partsArray: hardwarePart[];

  chart = []; // This will hold our chart info

  ComputedPriceForOne: number;

  // For pie chart
  data = {
    datasets: [
      {
        data: [25.00, 37.90, 18.00, 11.36, 39.80, 17.90, 11.90, 9.98, 8.50, 10.50, 0.99, 0.75, 0.02, 2.50, 3.99],
        backgroundColor: ['#FC1E1E', '#FCA51E', '#EFFC1E' , '#8FDA15',
          '#3FDA15' , '#1ABB5E', '#1AB8BB', '#1A68BB', '#231ABB', '#651ABB', '#BB1AB8'
          , '#BB1A76', '#150309', '#450309', '#251ABB'],
        fill: true
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Microcontroller', 'Motors', 'Wheels', 'Battery', 'Sharp Sensors', 'Magnetic Encoder', 'Motor Drive', 'Motor Brackets',
               'QTR1-A Sensors'
              , 'Sensor Brackets', 'Battery Connector', 'Switch', 'PCB'
              , 'IR Receiver', 'SG90 Servo']
  };

  constructor(private modalService: BsModalService) {}

  ngAfterViewInit() {
    this.chart = new Chart('budgetChart', {
      type: 'pie',
      data: this.data,
      options: {
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              let dataset = data.datasets[tooltipItem.datasetIndex];
              let currentValue = dataset.data[tooltipItem.index];
              return label + '$' + currentValue;
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    this.loadParts();
    this.ComputedPriceForOne = this.totalPriceForOne();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loadParts() {
    this.partsArray = [
      new hardwarePart(
        'Microcontroller',
        1,
        'Teensy 3.2 Board with ARM Cortex',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'Pricing, Specs, and Why',
        25,
        'Max CPU Freq: 120 MHz',
        'It is not bad for the price and it gives use more time to think about strategies and quicken development.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'The Teensy 3.2 provides a powerful ARM chip capable of overclocking to 120 MHz and has more than enough features for our needs.',
        '#microcontroller'
      ),

      new hardwarePart(
        'DC Motors',
        2,
        '50:1 Micro Metal Gearmotor HP 6V',
        '../../../assets/images/parts/motorsDSC_0048.jpg',
        'Pricing, Specs, and Why',
        18.95,
        'Dims: 10 × 12 × 26 mm1',
        'This gearmotor is a miniature high-power, 6 V brushed DC motor with long-life carbon brushes and a 51.45:1 metal gearbox.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'The speed of sonic.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Silicone Wheels',
        1,
        'Atom Wheel 37x34mm Pair',
        '../../../assets/images/parts/siliconewheelsDSC_0053.jpg',
        'Pricing, Specs, and Why',
        18,
        'Dims: 3.7 x 3.7 x 3.7',
        'Aluminum hubs come with a generously strong silicone tire for maximum traction ',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'The traction of a tank.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Battery',
        1,
        'Gens ace 7.4V 1000mAh LiPo Battery',
        '../../../assets/images/parts/batteryandConnectorDSC_0070.jpg',
        'Pricing, Specs, and Why',
        11.36,
        'Dims: 5.2 x 2 x 2 inches',
        'Quickly Recharged, long cycle life (150 times minimum), up to 200Wh/kg energy densit',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/batteryandConnectorDSC_0070.jpg',
        'A built in Pikachu for days.',
        '#microcontroller'
      ),

      new hardwarePart(
        'SHARP IR Sensors',
        3,
        'Sharp GP2Y0A21YK0F Analog Distance Sensor',
        '../../../assets/images/parts/sharpDSC_0052.jpg',
        'Pricing, Specs, and Why',
        9.95,
        'Dims: 1.75″ × 0.75″ × 0.53″',
        'With a detection range of 4″ to 32″ (10 cm to 80 cm) and an analog voltage indicating the distance, this sensor is very easy to use.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'Gives distance to track our enemy.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Magnetic Rotary Encoders',
        1,
        'Magnetic Encoder Pair Kit',
        '../../../assets/images/parts/encoderDSC_0049.jpg',
        'Pricing, Specs, and Why',
        8.95,
        'Dims: 10.6 mm × 11.6 mm1',
        'It is good to provide 12 counts per revolution of the motor shaft.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'Counts revolutions.',
        '#microcontroller'
      ),

      new hardwarePart(
        'H-Bridge',
        2,
        'MAX14870 Single Brushed DC Motor Driver ',
        '../../../assets/images/parts/hbridgeDSC_0050.jpg',
        'Pricing, Specs, and Why',
        5.95,
        'Dims: 0.6″ × 0.5″1',
        'This motor driver offers a wide operating voltage range of 4.5 V to 36 V and can deliver a continuous 1.7 A (2.5 A peak) to a single brushed DC motor.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'The brain of our motors is powerful.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Motor Brackets',
        1,
        'Micro Metal Gearmotor Bracket Pair',
        '../../../assets/images/parts/motorbracketsDSC_0051.jpg',
        'Pricing, Specs, and Why',
        4.99,
        'Dims: 10 mm × 12 mm × 26 mm',
        'These plastic mounting brackets allow you to easily and securely mount the ubiquitous 10 mm × 12 mm × 26 mm metal gearhead motors',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'Holds the motors firmly in place.',
        '#microcontroller'
      ),

      new hardwarePart(
        'QTR1-A Edge Sensors',
        2,
        'QTR-1A Reflectance Sensor Pair Kit',
        '../../../assets/images/parts/qtr1aDSC_0057.jpg',
        'Pricing, Specs, and Why',
        4.25,
        'Dims: 0.3″ × 0.5″ × 0.1″1',
        'This sensor carries a single infrared LED and phototransistor pair in an inexpensive, tiny 0.5" x 0.3" module that can be mounted almost anywhere.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'Really does know what an edge is of white or black.',
        '#microcontroller'
      ),

      new hardwarePart(
        'SG90 Micro Servo',
        1,
        'SG90 Mini Micro Servo',
        '../../../assets/images/parts/servoDSC_0254.jpg',
        'Pricing, Specs, and Why',
        3.99,
        'Dimension: approx 22*11.5*27mm. Simple and easy to use and is only 9 grams.',
        'This servo will be one of our passive distractions.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/servoDSC_0254.jpg',
        'Even toy parts can serve a professional purpose.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Sensor Brackets',
        3,
        'Sharp Sensor Bracket Perpendicular',
        '../../../assets/images/parts/perp_brack_DSC_0113.jpg',
        'Pricing, Specs, and Why',
        3.51,
        'Lightweight, about 1.5g',
        'These lightweight aluminum brackets make it easy to mount and integrate the Sharp Distance Sensors',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/perp_brack_DSC_0113.jpg',
        'Makes sure our sensors do not fall out.',
        '#microcontroller'
      ),

      new hardwarePart(
        'IR Remote Receiver',
        1,
        'IR Receiver Module 38 kHz TSOP4838',
        '../../../assets/images/parts/ir_rec_DSC_0095.jpg',
        'Pricing, Specs, and Why',
        2.50,
        'Decent range of 38 kHz signals.',
        'The module can receive a signal over three feet.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/ir_rec_DSC_0095.jpg',
        'It starts our robot and stops our robot but it does not make our robot win.',
        '#microcontroller'
      ),

      //   new hardwarePart('Sensor Brackets', 2 , 'Sharp Sensor Bracket Parallel',
      //   '../../../assets/images/parts/custompcbDSC_0056.jpg', 'Pricing, Specs, and Why',
      //   3.50, '120 MHz',
      //   'It is not bad for the price and it gives use more time to think about strategies and quicken development.', 'microcontroller',
      // 'Teensy 3.2', '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
      // 'The Teensy 3.2 provides a powerful ARM chip capable of overclocking to 120 MHz and has more than enough features for our needs.',
      // '#microcontroller'),

      new hardwarePart(
        'Battery Connector',
        1,
        'JST RCY Plug with 10cm Leads, Male',
        '../../../assets/images/parts/batteryandConnectorDSC_0070.jpg',
        'Pricing, Specs, and Why',
        0.99,
        'Good connection for battery.',
        'To connect.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'So we can charge it and connect it to our PCB.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Switch',
        1,
        'Rocker Switch: 3-Pin, SPDT, 10A',
        '../../../assets/images/parts/switchDSC_0115.jpg',
        'Pricing, Specs, and Why',
        0.75,
        'Mechanically good.',
        'This single-pole, double-throw (SPDT) rocker switch makes a great on/off power switch. It is rated for 10 A at 125 VAC and 6 A at 250 VAC.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/switchDSC_0115.jpg',
        'It does not come with games.',
        '#microcontroller'
      ),

      new hardwarePart(
        'Custom PCB',
        2,
        'Fabricated at SDSU',
        '../../../assets/images/parts/custompcbDSC_0056.jpg',
        'Pricing, Specs, and Why',
        0.01,
        'Within 10cm x 10cm',
        'Created to fit a small form factor.',
        'microcontroller',
        'Teensy 3.2',
        '../../../assets/images/parts/teensy3-2DSC_0055.jpg',
        'It actually is not totally free.',
        '#microcontroller'
      )
    ];
  }

  totalPriceForOne() {
    const allPrices: number[] = this.data.datasets[0].data;
    let PriceTotal = 0;
    for (let i = 0; i < allPrices.length; i++) {
      PriceTotal = PriceTotal + (this.partsArray[i].price * this.partsArray[i].quantity);
    }
    return PriceTotal;
  }

}
