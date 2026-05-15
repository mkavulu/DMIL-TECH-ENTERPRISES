import headphonesImg from "../assets/headphones.jpg";
import sony1Img from "../assets/sony 1.jpg";
import sony2Img from "../assets/sony2.jpeg";
import smartwatchImg from "../assets/smartwatch.jpg";
import gamingHeadsetImg from "../assets/gaming-headset.jpg";
import backpackImg from "../assets/backpack.jpg";
import hpLaptopImg from "../assets/hp-laptop.jpg";
import dellLaptopImg from "../assets/dell-laptop.jpg";
import hpDesktopImg from "../assets/hp-desktop.jpg";
import desktopsImg from "../assets/desktops.jpeg";
import dellDesktopImg from "../assets/dell-desktop.jpg";
import lenovoLaptopImg from "../assets/lenovo-laptop.jpg";
import earbudsImg from "../assets/earbuds.jpg";
import allInOneImg from "../assets/hp-all-in-one.jpeg";
import laptopChargerImg from "../assets/laptop-charger.jpg";
import routerImg from "../assets/router.png";
import switchImg from "../assets/switches.jpeg";
import tonerImg from "../assets/tonner.jpg";
import printerImg from "../assets/printers.jpg";
import monitorImg from "../assets/monitors.jpg";
import keyboardImg from "../assets/keyboard.jpg";
import printersImg from "../assets/printer.jpg";
import smartwatch2Img from "../assets/smartwatch2.jpeg";
import smartwatch3Img from "../assets/smartwatch3.jpeg";
import smartwatch4Img from "../assets/smartwatch4.jpeg";
import smartwatch5Img from "../assets/smartwatch5.jpeg";
import smartwatch6Img from "../assets/smartwatch6.jpeg";
import GaminglaptopImg from "../assets/gaminglaptop.jpg";
import lenovoDesktopImg from "../assets/lenovodesktop.jpg";
import gamingDesktopImg from "../assets/gamingdesktop.jpg";
import earbudImg from "../assets/earbuds 2.jpeg";
import earbudzImg from "../assets/earbuds3.jpg";
import earbudzzImg from "../assets/earbuds4.jpg";
import DellallInOneImg from "../assets/dell-all-in-one.jpg";
import lenovoallInOneImg from "../assets/lenovo-all-in-one.jpg";
import dellmonitorImg from "../assets/dell-monitor.jpg";
import lenovomonitorImg from "../assets/lenovo-monitor.jpg";
import sonyheadphonesImg from "../assets/sony.jpg";
import logitechheadphonesImg from "../assets/logitech.jpeg";
import extenderImg from "../assets/tplink-externder.jpg";
import decoImg from "../assets/Deco m4-m5.jpg";
import flashImg from "../assets/flash-disk.jpg";
import memoryImg from "../assets/memory-card.jpg";
import macbookImg from "../assets/macbook.jpg";
import surfaceImg from "../assets/surface.jpeg";
import earbud4Img from "../assets/earbuds5.jpeg";
import earbud5Img from "../assets/earbuds6.jpeg";



const products = [
  { id: 1, name: "Wireless Headphones", category: "headphones", image: headphonesImg },
  { id: 2, name: "Smart Watch", category: "smartwatch", image: smartwatchImg },
  { id: 3, name: "Gaming Headset", category: "headphones", image: gamingHeadsetImg },
  { id: 4, name: "Laptop Backpack", category: "accessories", image: backpackImg },
  { id: 5, name: "HP Laptop", category: "laptops", image: hpLaptopImg },
  { id: 6, name: "Dell Laptop", category: "laptops", image: dellLaptopImg },
  { id: 7, name: "HP Desktop", category: "desktops", image: hpDesktopImg },
  { id: 8, name: "Dell Desktop", category: "desktops", image: dellDesktopImg },
  { id: 9, name: "Audionic Ear Buds", category: "earbuds", image: earbudsImg },
  { id: 10, name: "Lenovo Laptop", category: "laptops", image: lenovoLaptopImg },
  { id: 11, name: "HP All-In-One", category: "all-in-one", image: allInOneImg },
  { id: 12, name: "Laptop Charger", category: "accessories", image: laptopChargerImg },
  { id: 13, name: "Router", category: "accessories", image: routerImg },
  { id: 14, name: "Switch", category: "accessories", image: switchImg },
  { id: 15, name: "Toner & Cartridges", category: "printers", image: tonerImg },
  { id: 16, name: "HP Printer", category: "printers", image: printerImg },
  { id: 17, name: "Epson Printer", category: "printers", image: printersImg },
  { id: 18, name: "HP Monitor", category: "monitors", image: monitorImg },
  { id: 19, name: "Wireless Keyboard & Mouse", category: "accessories", image: keyboardImg },
  { id: 20, name: "Smart Watch", category: "smartwatch", image: smartwatch2Img },
  { id: 21, name: "Smart Watch", category: "smartwatch", image: smartwatch3Img },
  { id: 22, name: "Smart Watch", category: "smartwatch", image: smartwatch4Img },
  { id: 23, name: "Gaming Laptop", category: "laptops", image: GaminglaptopImg },
  { id: 24, name: "Lenovo Desktop", category: "desktops", image: lenovoDesktopImg },
  { id: 25, name: "Gaming Desktop", category: "desktops", image: gamingDesktopImg },
  { id: 26, name: "Apple Ear Buds", category: "earbuds", image: earbudImg },
  { id: 27, name: "Oraimo Ear Buds", category: "earbuds", image: earbudzImg },
  { id: 28, name: "Ear Buds", category: "earbuds", image: earbudzzImg },
  { id: 29, name: "Dell All-In-One", category: "all-in-one", image: DellallInOneImg },
  { id: 29, name: "Lenovo All-In-One", category: "all-in-one", image: lenovoallInOneImg },
  { id: 30, name: "Dell Monitor", category: "monitors", image: dellmonitorImg },
  { id: 31, name: "Lenovo Monitor", category: "monitors", image: lenovomonitorImg },
  { id: 32, name: "Sony Headphones", category: "headphones", image: sonyheadphonesImg },
  { id: 32, name: "Logitech Headphones", category: "headphones", image: logitechheadphonesImg },
  { id: 33, name: "Extenders", category: "accessories", image: extenderImg },
  { id: 34, name: "Deco's", category: "accessories", image: decoImg },
  { id: 35, name: "Flash Disk", category: "accessories", image: flashImg },
  { id: 36, name: "Memory Card", category: "accessories", image: memoryImg },
  { id: 37, name: "Surface Pro", category: "laptops", image: surfaceImg },
  { id: 38, name: "Macbook", category: "laptops", image: macbookImg },
  { id: 39, name: "Smart Watch", category: "smartwatch", image: smartwatch5Img },
  { id: 39, name: "Smart Watch", category: "smartwatch", image: smartwatch6Img },
  { id: 40, name: "Desktop", category: "desktops", image: desktopsImg },
  { id: 41, name: "Soundcore AeroFit 2 AI Translation Earbuds", category: "earbuds", image: earbud4Img },
  { id: 41, name: "Wireless Earbud Sport, Bluetooth 5.3", category: "earbuds", image: earbud5Img },
  { id: 42, name: "Wireless Sony WH-1000XM5 Wireless Headphones", category: "headphones", image: sony1Img },
  { id: 43, name: "Sony WI-1000XM2 Noise-Canceling Wireless", category: "headphones", image: sony2Img },
];

export default products;

