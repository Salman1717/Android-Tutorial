import React from 'react';
import styles from './IntroToKotlin.css';
import delish1 from './icons/delish1.png';



function IntroToKotlin(){
    return(
        <div>
            <p><br></br></p>
            <h1 align="center" >Write your first program </h1>
            <ProCard    
            desc="In this codelab, you are going to write your first program in the Kotlin language using an interactive editor that you can run from your browser.

            You can think of a program as a series of instructions for the system to perform some action. For example, you could write a program that creates a birthday card. In that program, you could write an instruction to print congratulatory text or calculate someone's age from their birth year.
            
            Just like you use human language to communicate with another person, you use a programming language to communicate with the operating system of your computer. Fortunately, programming languages are less complex than human languages and quite logical!
            
            Android apps are written in the Kotlin programming language. Kotlin is a modern language created to help developers write code efficiently and with as few errors as possible.
          "  />
          <ImageCard
          img=""
          />
        <Summary
        a="https://developer.android.com/training/kotlinplayground"
        desc=" The above link is an interactive code editor on the web where you can practice writing Kotlin programs.
        All Kotlin programs need to have a main() function: fun main() {}
        Use the println() function to print a line of text."
        />
        </div>
        


    )
}

function ProCard(props){
    return(
    <div className="kot">
        <div className="kot__body">
          <h1  className="kot__title"src={props.title}/>
         
          <h2 className="kot__description">{props.desc}</h2>
        </div>
        </div>
    )
  }

  function ImageCard(props){
    return(
    <div className="kot">
        <div className="kot__body">
        <img class="kot__img" src={props.img}/>
        <img class="kot__img" src={props.img1}/>
        </div>
        </div>
    )
  }
  function Summary(props){
    return(
    <div className="kot">
        <div className="kot__body">
        <a  align="center" className="kot__description" href='https://developer.android.com/training/kotlinplayground' >{props.a}</a>
          <h1  className="kot__title"src={props.title}/>
          <h2 className="kot__description">{props.desc}</h2>
        </div>
        </div>
    )
  }

  


export default IntroToKotlin;