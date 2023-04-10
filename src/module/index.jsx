import React, { Component } from "react";
import './style.module.css';
export class ChonKinh extends Component {
    arrItem = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        url: "img/glassesImage/v9.png",
    }
    hangdleChangGlasses = (url) => {
        this.setState({
            url
        })
    }
    renderGlasses = () => {
        const img = {
            width: '260px',
        }
        return this.arrItem.map((item, index) => {
            return (
                <div className="col-4" key={item.id}>
                    <button type="button" className="btn"><img src={`img/${item.url}`} alt="" style={img} onClick={()=>{this.hangdleChangGlasses(`img/${item.url}`)}}/></button>
                </div>

            )
        })
    }

    render() {

        const model = {
            position: 'relative',
            width: '100',
        }
        const glasses = {
            position: 'absolute',
            top: '152px',
            left: '630px',
            width: '260px',
            opacity: '.5'
        }
        return (
            <div className="container">
                <div className="bg">
                    <img src="img/glassesImage/model.jpg" alt="" style={model} />
                    <img src={`${this.state.url}`} alt="" style={glasses} />
                </div>
                <div className="row">
                    {this.renderGlasses()}
                </div>
            </div>
        )
    }
}