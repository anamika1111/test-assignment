import { AfterViewInit, Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {


  constructor(
    private objFormBuilder:FormBuilder
  ){

  }

  currentIndex = 0;

  touchWithUsForm = this.objFormBuilder.group({
    strName:[''],
    strEmail:[''],
    strSUbject:[''],
    strMessage:[''],

  })

arrMenu = [
 { strName:"Home"},
 { strName:"Menu"},
 { strName:"About"},
 { strName:"Contact"},

]

arrOther = [
  { strName:"Help"},
  { strName:"Payment"},
  { strName:"Return"},
  { strName:"Privacy policies"},
 
 ]

arrFoodList = [
  {strName:"Burger",strIcon:"../assets/images/Hamburger.png",strIcon2:"../assets/images/Hamburger (1).png"},
  {strName:"Pizza",strIcon:"../assets/images/Pizza.png",strIcon2:"../assets/images/Pizza (1).png"},
  {strName:"Drink",strIcon:"../assets/images/Iced Coffee.png",strIcon2:"../assets/images/Soda.png"},
  {strName:"Dessert",strIcon:"../assets/images/Cherry Cheesecake.png",strIcon2:"../assets/images/Dessert.png"}

]

arrBurgerList = [
  {strName:"Spicy Chicken Burger",strUrl:"../assets/images/Ellipse 11.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},
  {strName:"Spicy Beef Burger",strUrl:"../assets/images/Ellipse 12.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},
  {strName:"Potato Burger",strUrl:"../assets/images/Ellipse 13.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},
  {strName:"Zinger Burger",strUrl:"../assets/images/Ellipse 14.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},
  {strName:"Cheese Chicken Burger",strUrl:"../assets/images/Ellipse 15.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},
  {strName:"Crispy Chicken Burger",strUrl:"../assets/images/Ellipse 16.svg",strRate:"$ 30.00",strDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore"},

]
next() {
  this.currentIndex = (this.currentIndex + 1) % this.arrMenu.length;
}

prev() {
  this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.arrMenu.length - 1;
}



ngAfterViewInit(): void {
  // Initialization code that depends on the DOM
  $(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      nav: true,
      dots: true,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      autoplay: true,
      center: true,
      loop: true,
    
    });
  });


}
}
