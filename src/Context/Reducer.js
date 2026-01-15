import { createSlice } from '@reduxjs/toolkit'
import img20 from '../assets/img20.webp'
import img21 from '../assets/img21.webp'
import img22 from '../assets/img22.webp'
import img23 from '../assets/img23.webp'
import img24 from '../assets/img24.webp'
import img25 from '../assets/img25.webp'
import img27 from '../assets/img27.webp'
import img28 from '../assets/img28.webp'
import img30 from '../assets/img30.webp'
import img31 from '../assets/img31.webp'
import img32 from '../assets/img32.webp'
import img33 from '../assets/img33.webp'
import img34 from '../assets/img34.png'
import img36 from '../assets/img36.webp'
import img38 from '../assets/img38.webp'
import img40 from '../assets/img40.webp'
import img41 from '../assets/img41.webp'
import img42 from '../assets/img42.webp'
import img43 from '../assets/img43.webp'
import img44 from '../assets/img44.webp'
import img45 from '../assets/img45.webp'
import img46 from '../assets/img46.webp'
import img47 from '../assets/img47.webp'
import img48 from '../assets/img48.png'
import img49 from '../assets/img49.webp'
import img50 from '../assets/img50.webp'
import img51 from '../assets/img51.webp'
import img52 from '../assets/img52.webp'
import img53 from '../assets/img53.webp'
import img54 from '../assets/img54.webp'
import img55 from '../assets/img55.webp'
import img56 from '../assets/img56.webp'
import img57 from '../assets/img57.webp'
import img58 from '../assets/img58.webp'
import img59 from '../assets/img59.webp'
import img400 from '../assets/img400.webp'
import img410 from '../assets/img41.5.webp'
import img420 from '../assets/img42.5.webp'
import img430 from '../assets/img43.5.webp'
import img440 from '../assets/img44.5.webp'
import img450 from '../assets/img45.5.webp'
import img460 from '../assets/img46.5.webp'
import img470 from '../assets/img47.5.webp'
import img480 from '../assets/img48.5.webp'
import img490 from '../assets/img49.5.webp'
import img500 from '../assets/img50.5.webp'
import img510 from '../assets/img51.5.webp'
import img520 from '../assets/img52.5.webp'
import img530 from '../assets/img53.5.webp'
import img540 from '../assets/img54.5.webp'
import img550 from '../assets/img55.5.webp'
import img560 from '../assets/img56.5.webp'
import img570 from '../assets/img57.5.webp'
import img580 from '../assets/img58.5.webp'
import img590 from '../assets/img59.5.webp'
import img200 from '../assets/img20.5.webp'
import img210 from '../assets/img21.5.webp'
import img220 from '../assets/img22.5.webp'
import img230 from '../assets/img23.5.png'
import img240 from '../assets/img24.5.webp'
import img250 from '../assets/img25.5.webp'
import img260 from '../assets/img26.5.webp'
import img270 from '../assets/img27.5.png'
import img280 from '../assets/img28.5.jpg'
import img300 from '../assets/img30.5.webp'
import img310 from '../assets/img31.5.webp'
import img320 from '../assets/img32.5.webp'
import img330 from '../assets/img33.5.webp'
import img340 from '../assets/img34.5.webp'
import img350 from '../assets/img35.5.webp'
import img360 from '../assets/img36.5.webp'
import img370 from '../assets/img37.5.webp'
import img380 from '../assets/img38.5.webp'
import img390 from '../assets/img39.5.jpg'
import color1 from '../assets/color1.webp'
import color2 from '../assets/color2.webp'
import color4 from '../assets/color4.webp'
import color5 from '../assets/color5.webp'
import color6 from '../assets/color6.webp'
import color7 from '../assets/color7.webp'
import color8 from '../assets/color8.webp'
import color9 from '../assets/color9.webp'
import color10 from '../assets/color10.webp'
import color11 from '../assets/color11.webp'
import color12 from '../assets/color12.webp'
import color13 from '../assets/color13.webp'
import color14 from '../assets/color14.webp'
import color15 from '../assets/color15.webp'
import color16 from '../assets/color16.webp'
import color17 from '../assets/color17.webp'
import color18 from '../assets/color18.webp'
import color19 from '../assets/color19.webp'
import color22 from '../assets/color22.webp'
import color23 from '../assets/color23.webp'
import color24 from '../assets/color24.webp'
import color25 from '../assets/color25.webp'
import color26 from '../assets/color26.webp'
import color27 from '../assets/color27.webp'
import color28 from '../assets/color28.webp'
import color29 from '../assets/color29.webp'
import color30 from '../assets/color30.webp'
import color32 from '../assets/color32.webp'
import color33 from '../assets/color33.webp'
import color36 from '../assets/color36.webp'
import color37 from '../assets/color37.webp'
import color38 from '../assets/color38.webp'
import color39 from '../assets/color39.webp'
import color40 from '../assets/color40.webp'
import color41 from '../assets/color41.webp'
import color46 from '../assets/color46.webp'
import color47 from '../assets/color47.webp'
import color48 from '../assets/color48.webp'
import color49 from '../assets/color49.webp'
import color50 from '../assets/color50.webp'
import color51 from '../assets/color51.webp'
import color52 from '../assets/color52.webp'
import color53 from '../assets/color53.webp'
import color54 from '../assets/color54.webp'
import color55 from '../assets/color55.webp'
import color56 from '../assets/color56.webp'
import color57 from '../assets/color57.webp'
import color58 from '../assets/color58.webp'
import color61 from '../assets/color61.webp'
import color62 from '../assets/color62.webp'
import color63 from '../assets/color63.webp'
import color67 from '../assets/color67.webp'
import color68 from '../assets/color68.webp'
import color69 from '../assets/color69.webp'
import color70 from '../assets/color70.webp'
import color71 from '../assets/color71.webp'
import color72 from '../assets/color72.webp'
import color73 from '../assets/color73.webp'
import extract1 from '../assets/extract1.webp'
import extract2 from '../assets/extract2.webp'
import extract3 from '../assets/extract3.webp'
import extract4 from '../assets/extract4.webp'
import extract5 from '../assets/extract5.webp'
import extract6 from '../assets/extract6.webp'
import extract7 from '../assets/extract7.webp'
import extract8 from '../assets/extract8.webp'
import extract9 from '../assets/extract9.webp'
import extract10 from '../assets/extract10.webp'
import extract11 from '../assets/extract11.webp'
import extract12 from '../assets/extract12.webp'
import extract13 from '../assets/extract13.webp'
import extract14 from '../assets/extract14.webp'
import extract15 from '../assets/extract15.webp'
import extract16 from '../assets/extract16.webp'
import extract17 from '../assets/extract17.webp'
import extract18 from '../assets/extract18.webp'
import extract19 from '../assets/extract19.webp'
import extract20 from '../assets/extract20.webp'
import extract21 from '../assets/extract21.webp'
import extract22 from '../assets/extract22.webp'
import extract23 from '../assets/extract23.webp'
import extract24 from '../assets/extract24.webp'
import extract25 from '../assets/extract25.webp'
import extract26 from '../assets/extract26.webp'
import extract27 from '../assets/extract27.webp'
import extract28 from '../assets/extract28.webp'
import extract29 from '../assets/extract29.webp'
import extract30 from '../assets/extract30.webp'
import extract31 from '../assets/extract31.webp'
import extract32 from '../assets/extract32.webp'
import extract33 from '../assets/extract33.webp'
import extract34 from '../assets/extract34.webp'
import extract35 from '../assets/extract35.webp'
import extract36 from '../assets/extract36.webp'
import extract37 from '../assets/extract37.webp'
import extract38 from '../assets/extract38.webp'
import extract39 from '../assets/extract39.webp'
import extract40 from '../assets/extract40.webp'
import extract41 from '../assets/extract41.webp'
import extract42 from '../assets/extract42.webp'
import extract43 from '../assets/extract43.webp'
import extract47 from '../assets/extract47.webp'
import extract48 from '../assets/extract48.webp'
import extract49 from '../assets/extract49.webp'
import extract50 from '../assets/extract50.webp'
import extract51 from '../assets/extract51.webp'
import extract52 from '../assets/extract52.webp'
import extract53 from '../assets/extract53.webp'
import extract54 from '../assets/extract54.webp'
import extract55 from '../assets/extract55.webp'
import extract56 from '../assets/extract56.webp'
import extract57 from '../assets/extract57.webp'
import extract58 from '../assets/extract58.webp'
import extract59 from '../assets/extract59.webp'
import extract60 from '../assets/extract60.webp'
import extract61 from '../assets/extract61.webp'
import extract62 from '../assets/extract62.webp'
import extract63 from '../assets/extract63.webp'
import extract64 from '../assets/extract64.webp'
import extract65 from '../assets/extract65.webp'
import extract66 from '../assets/extract66.webp'
import extract68 from '../assets/extract68.webp'
import extract69 from '../assets/extract69.webp'
import extract70 from '../assets/extract70.webp'
import extract71 from '../assets/extract71.webp'
import extract72 from '../assets/extract71.webp'
import extract73 from '../assets/extract73.webp'
import extract74 from '../assets/extract74.webp'
import extract75 from '../assets/extract75.webp'
import extract76 from '../assets/extract76.webp'
import extract78 from '../assets/extract78.webp'
import extract79 from '../assets/extract79.webp'
import extract80 from '../assets/extract80.webp'
import extract81 from '../assets/extract81.webp'
import extract82 from '../assets/extract82.webp'
import extract83 from '../assets/extract83.webp'
import extract84 from '../assets/extract84.webp'
import extract85 from '../assets/extract85.webp'
import extract86 from '../assets/extract86.webp'
import extract89 from '../assets/extract89.webp'
import extract90 from '../assets/extract90.webp'
import extract91 from '../assets/extract91.webp'
import extract92 from '../assets/extract92.webp'
import extract93 from '../assets/extract93.webp'
import extract94 from '../assets/extract94.webp'
import extract97 from '../assets/extract97.webp'
import extract98 from '../assets/extract98.webp'
import extract99 from '../assets/extract99.webp'
import extract100 from '../assets/extract100.webp'
import extract101 from '../assets/extract101.webp'
import extract102 from '../assets/extract102.webp'
import extract105 from '../assets/extract105.webp'
import extract106 from '../assets/extract106.webp'
import extract107 from '../assets/extract107.webp'
import extract108 from '../assets/extract108.webp'
import extract109 from '../assets/extract109.webp'
import extract110 from '../assets/extract110.webp'
import extract113 from '../assets/extract113.webp'
import extract114 from '../assets/extract114.webp'
import extract115 from '../assets/extract115.webp'
import extract116 from '../assets/extract116.webp'
import extract117 from '../assets/extract117.webp'
import extract118 from '../assets/extract118.webp'
import extract119 from '../assets/extract119.webp'
import extract120 from '../assets/extract120.webp'
import extract121 from '../assets/extract121.webp'
import extract122 from '../assets/extract122.webp'
import extract123 from '../assets/extract123.webp'
import extract124 from '../assets/extract124.webp'
import extract125 from '../assets/extract125.webp'
import extract126 from '../assets/extract126.webp'
import extract127 from '../assets/127.webp'
import extract128 from '../assets/128.webp'
import extract129 from '../assets/129.webp'
import extract131 from '../assets/131.webp'
import extract132 from '../assets/132.webp'
import extract133 from '../assets/133.webp'
import extract134 from '../assets/134.webp'
import extract135 from '../assets/135.webp'
import extract136 from '../assets/136.webp'
import extract138 from '../assets/138.webp'
import extract139 from '../assets/139.webp'
import extract140 from '../assets/140.webp'
import extract141 from '../assets/141.webp'
import extract142 from '../assets/142.webp'
import extract143 from '../assets/143.webp'
import extract144 from '../assets/144.webp'
import extract145 from '../assets/145.webp'
import extract146 from '../assets/146.webp'
import extract147 from '../assets/147.webp'
import extract148 from '../assets/148.webp'
import extract149 from '../assets/149.webp'
import extract150 from '../assets/150.webp'
import extract151 from '../assets/151.webp'
import extract152 from '../assets/152.webp'
import extract153 from '../assets/153.webp'
import extract154 from '../assets/154.webp'
import extract155 from '../assets/155.webp'
import extract156 from '../assets/156.webp'
import extract157 from '../assets/157.webp'
import extract158 from '../assets/158.webp'
import extract159 from '../assets/159.webp'
import extract160 from '../assets/160.webp'
import extract201 from '../assets/201.webp'
import extract202 from '../assets/202.webp'
import extract203 from '../assets/203.webp'
import extract204 from '../assets/204.webp'
import extract205 from '../assets/205.webp'
import extract206 from '../assets/206.webp'
import extract207 from '../assets/207.webp'
import extract208 from '../assets/208.webp'
import extract209 from '../assets/209.webp'
import extract210 from '../assets/210.webp'
import { useState } from 'react'



const products = [
    {
        id: "1",
        name: "Ignite Smart Watch",
        image1: img200,
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'BEST SELLER',
        off: '50% OFF',
        count: '',
        color1: '#000000',
        color2: '#485742',
        color3: 'grey',
        image2: img20,
        image3: color1,
        image4: color2,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "2",
        name: "Ignite Smart Watch",
        image1: img210,
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        off: '50% OFF',
        count: '',
        color1: '#000000',
        color2: '#D7D6D6',
        color3: '#000000',
        image2: img21,
        image3: color4,
        image4: color5,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "3",
        name: "Ignite Smart Watch",
        image1: img220,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: '#D7D6D6',
        color3: 'grey',
        image2: img22,
        image3: color6,
        image4: color7,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "4",
        name: "Ignite Smart Watch",
        image1: img230,
        off: '50% OFF',
        discription: 'AMOLD Display',
        price: 5999,
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#D7BCA7',
        color2: '#3863a1',
        color3: '#bfa27f',
        image2: img23,
        image3: color8,
        image4: color9,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "5",
        name: "Ignite Smart Watch",
        image1: img240,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'grey',
        color3: '#335882',
        image2: img24,
        image3: color10,
        image4: color11,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "6",
        name: "Ignite Smart Watch",
        image1: img250,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'grey',
        color3: '#796a49',
        image2: img25,
        image3: color12,
        image4: color13,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "7",
        name: "Ignite Smart Watch",
        image1: img260,
        price: 5999,
        discription: 'AMOLD Display',
        off: '50% OFF',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#D7BCA7',
        color2: '#000000',
        color3: '#CCC5BB',
        image2: img30,
        image3: color14,
        image4: color15,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "8",
        name: "Ignite Smart Watch",
        image1: img270,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'gold',
        color2: 'black',
        color3: '#173B85',
        image2: img27,
        image3: color16,
        image4: color17,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "9",
        name: "Ignite Smart Watch",
        image1: img280,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#C9C9C9',
        color3: 'black',
        image2: img28,
        image3: color18,
        image4: color19,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "10",
        name: "Ignite Smart Watch",
        image1: img250,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'grey',
        color3: '#796a49',
        image2: img25,
        image3: color12,
        image4: color13,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "11",
        name: "Ignite Smart Watch",
        image1: img300,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#D7BCA7',
        color2: '#000000',
        color3: '#CCC5BB',
        image2: img30,
        image3: color14,
        image4: color15,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "12",
        name: "Ignite Smart Watch",
        image1: img310,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: 'black',
        color3: '#173B85',
        image2: img31,
        image3: img31,
        image4: color22,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "13",
        name: "Ignite Smart Watch",
        image1: img320,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#C26722',
        color3: '#222F4F',
        image2: img32,
        image3: color23,
        image4: color24,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "14",
        name: "Ignite Smart Watch",
        image1: img330,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: '#C9C9C9',
        color3: '#9A734C',
        image2: img33,
        image3: color25,
        image4: color26,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "15",
        name: "Ignite Smart Watch",
        image1: img340,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: '#7B3042',
        color3: '#AEAEAE',
        image2: img34,
        image3: color27,
        image4: color28,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "16",
        name: "Ignite Smart Watch",
        image1: img350,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: '#D7D6D6',
        color3: 'grey',
        image2: img22,
        image3: color6,
        image4: color7,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "17",
        name: "Ignite Smart Watch",
        image1: img360,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'silver',
        color2: '#D7BCA7',
        color3: 'black',
        image2: img36,
        image3: color29,
        image4: color30,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "18",
        name: "Ignite Smart Watch",
        image1: img370,
        off: '50% OFF',
        price: 5999,
        rating: 4.77,
        discription: 'AMOLD Display',
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#485742',
        color3: 'grey',
        image2: img20,
        image3: color1,
        image4: color2,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "19",
        name: "Ignite Smart Watch",
        image1: img380,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#0053C7',
        color2: '#FF8A63',
        color3: '#E6E0D9',
        image2: img38,
        image3: color32,
        image4: color33,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "20",
        name: "Ignite Smart Watch",
        image1: img390,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: '#C9C9C9',
        color3: '#9A734C',
        image2: img33,
        image3: color25,
        image4: color26,
        temp: [
            { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
            { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "21",
        name: "Ignite Smart Watch",
        image1: img400,
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'BEST SELLER',
        off: '50% OFF',
        count: '',
        text: 'Active Noise Cancellation | Fawad Khan Recommended',
        color1: '#414141',
        color2: '#e0e9c2',
        color3: '#b5d5d6',
        image2: extract1,
        temp: [
            { image2: [{ fig1: extract1 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
            { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "22",
        name: "Ignite Smart Watch",
        image1: img410,
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        text: 'Active Noise Cancellation | Fawad Khan Recommended',
        off: '50% OFF',
        count: '',
        color1: '#000000',
        color2: '#159C23',
        color3: '#E3E3E3',
        image2: img41,
        image3: color36,
        image4: color37,
        temp: [
            { image2: [{ fig1: extract29 }, { fig2: extract30 }, { fig3: extract31 }, { fig4: extract32 }], },
            { image3: [{ fig1: extract34 }, { fig2: extract35 }, { fig3: extract36 }, { fig4: extract37 }], },
            { image4: [{ fig1: extract38 }, { fig2: extract39 }, { fig3: extract40 }, { fig4: extract41 }], },
            { image5: [{ fig1: extract42 }, { fig2: extract43 }, { fig3: extract47 }, { fig4: extract48 }, { fig5: extract33 }], },
        ],
    },
    {
        id: "23",
        name: "Quantum Earbuds",
        image1: img420,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        text: 'Active Noise Cancellation | Fawad Khan Recommended',
        rating: 4.77,
        label: 'BEST SELLER',
        count: '',
        color1: '#398D3B',
        color2: '#000000',
        color3: '#9C0505',
        image2: img42,
        image3: color38,
        image4: color39,
        temp: [
            { image2: [{ fig1: extract49 }, { fig2: extract50 }, { fig3: extract51 }, { fig4: extract52 }, { fig5: extract53 }, { fig6: extract54 }], },
            { image3: [{ fig1: extract55 }, { fig2: extract56 }, { fig3: extract57 }, { fig4: extract58 }, { fig5: extract59 }, { fig6: extract60 }], },
            { image4: [{ fig1: extract61 }, { fig2: extract62 }, { fig3: extract63 }, { fig4: extract64 }, { fig5: extract65 }, { fig6: extract66 }], },
            { image5: [{ fig1: extract68 }, { fig2: extract69 }, { fig3: extract70 }, { fig4: extract71 }, { fig5: extract72 }, { fig6: extract73 }], },
            { image6: [{ fig1: extract74 }, { fig2: extract75 }, { fig3: extract76 }, { fig4: extract78 }, { fig4: extract79 }, { fig4: extract80 }], }
        ],
    },
    {
        id: "24",
        name: "Ignite Smart Watch",
        image1: img430,
        off: '50% OFF',
        discription: 'AMOLD Display',
        price: 5999,
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#5A274C',
        color3: '#f6f6f6',
        image2: img43,
        image3: color40,
        image4: color41,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "25",
        name: "Ignite Smart Watch",
        image1: img440,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#173B85',
        color2: 'white',
        color3: 'brown',
        image2: img44,
        image3: color41,
        image4: color39,
        temp: [
            { image2: [{ fig1: extract118 }, { fig2: extract119 }, { fig3: extract120 }, { fig4: extract121 }, { fig5: extract122 }, { fig6: extract123 }], },
            { image3: [{ fig1: extract124 }, { fig2: extract125 }, { fig3: extract126 }, { fig4: extract127 }, { fig5: extract128 }, { fig6: extract129 }], },
            { image4: [{ fig1: extract131 }, { fig2: extract132 }, { fig3: extract133 }, { fig4: extract134 }, { fig5: extract135 }, { fig6: extract136 }], },
        ],
    },
    {
        id: "26",
        name: "Ignite Smart Watch",
        image1: img450,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'black',
        color2: 'white',
        color3: '#096122',
        image2: img45,
        image3: color41,
        image4: img42,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract138 }, { fig3: extract139 }, { fig4: extract140 }, { fig5: extract141 }, { fig6: extract142 }], },
            { image3: [{ fig1: extract143 }, { fig2: extract144 }, { fig3: extract145 }, { fig4: extract146 }, { fig5: extract147 }, { fig6: extract148 }], },
            { image4: [{ fig1: extract149 }, { fig2: extract150 }, { fig3: extract151 }, { fig4: extract152 }, { fig5: extract153 }, { fig6: extract154 }], },
            { image5: [{ fig1: extract155 }, { fig2: extract156 }, { fig3: extract157 }, { fig4: extract158 }, { fig5: extract159 }, { fig6: extract160 }], },
        ],
    },
    {
        id: "27",
        name: "Ignite Smart Watch",
        image1: img460,
        price: 5999,
        discription: 'AMOLD Display',
        off: '50% OFF',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#CCCCCC',
        color3: 'green',
        image2: img46,
        image3: color46,
        image4: color47,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "28",
        name: "Ignite Smart Watch",
        image1: img470,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#159C23',
        color2: '#000000',
        color3: '#999aa1',
        image2: img47,
        image3: color48,
        image4: color49,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
            { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "29",
        name: "Ignite Smart Watch",
        image1: img480,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'white',
        color3: 'white',
        image2: img48,
        image3: color50,
        image4: color50,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "30",
        name: "Ignite Smart Watch",
        image1: img490,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#484774',
        color3: '#F1F1F1',
        image2: img49,
        image3: color51,
        image4: color52,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "31",
        name: "Ignite Smart Watch",
        image1: img500,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#eae9f4',
        color3: '#005BD3',
        image2: img50,
        image3: color53,
        image4: color54,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
            { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
            { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
            { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
            { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        ],
    },
    {
        id: "32",
        name: "Ignite Smart Watch",
        image1: img510,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'white',
        color3: 'white',
        image2: img51,
        image3: color55,
        image4: color55,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "33",
        name: "Ignite Smart Watch",
        image1: img520,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: 'white',
        color2: 'black',
        color3: 'white',
        image2: img52,
        image3: color56,
        image4: img52,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "34",
        name: "Ignite Smart Watch",
        image1: img530,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: 'white',
        color3: '#173B85',
        image2: img53,
        image3: color57,
        image4: color58,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "35",
        name: "Ignite Smart Watch",
        image1: img540,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#BEBEBE',
        color3: '#056C14',
        image2: img54,
        image3: color62,
        image4: color61,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "36",
        name: "Ignite Smart Watch",
        image1: img550,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#159C23',
        color3: '#DFABFA',
        image2: img55,
        image3: color61,
        image4: color62,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "37",
        name: "Ignite Smart Watch",
        image1: img560,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#159C23',
        color3: '#0C7DCF',
        image2: img56,
        image3: color63,
        image4: color67,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "38",
        name: "Ignite Smart Watch",
        image1: img570,
        off: '50% OFF',
        price: 5999,
        rating: 4.77,
        discription: 'AMOLD Display',
        label: 'Best Seller',
        count: '',
        color1: 'blue',
        color2: 'maroon',
        color3: 'white',
        image2: img57,
        image3: color68,
        image4: color69,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "39",
        name: "Ignite Smart Watch",
        image1: img580,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#000000',
        color2: '#485742',
        color3: 'grey',
        image2: img58,
        image3: color70,
        image4: color71,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
    {
        id: "40",
        name: "Ignite Smart Watch",
        image1: img590,
        off: '50% OFF',
        price: 5999,
        discription: 'AMOLD Display',
        rating: 4.77,
        label: 'Best Seller',
        count: '',
        color1: '#EAD8AB',
        color2: '#000000',
        color3: '#005BD3',
        image2: img59,
        image3: color72,
        image4: color73,
        temp: [
            { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
            { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
            { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
            { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
            { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        ],
    },
]
const getDefaultcard = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
        const id = products[i].id;
        cart[id] = 0;
    }
    return cart;
};

const initialState = {
    // products: [
    //     {
    //         id: "1",
    //         name: "Ignite Smart Watch",
    //         image1: img200,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'BEST SELLER',
    //         off: '50% OFF',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#485742',
    //         color3: 'grey',
    //         image2: img20,
    //         image3: color1,
    //         image4: color2,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "2",
    //         name: "Ignite Smart Watch",
    //         image1: img210,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         off: '50% OFF',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#D7D6D6',
    //         color3: '#000000',
    //         image2: img21,
    //         image3: color4,
    //         image4: color5,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "3",
    //         name: "Ignite Smart Watch",
    //         image1: img220,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: '#D7D6D6',
    //         color3: 'grey',
    //         image2: img22,
    //         image3: color6,
    //         image4: color7,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "4",
    //         name: "Ignite Smart Watch",
    //         image1: img230,
    //         off: '50% OFF',
    //         discription: 'AMOLD Display',
    //         price: 5999,
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#D7BCA7',
    //         color2: '#3863a1',
    //         color3: '#bfa27f',
    //         image2: img23,
    //         image3: color8,
    //         image4: color9,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "5",
    //         name: "Ignite Smart Watch",
    //         image1: img240,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'grey',
    //         color3: '#335882',
    //         image2: img24,
    //         image3: color10,
    //         image4: color11,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "6",
    //         name: "Ignite Smart Watch",
    //         image1: img250,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'grey',
    //         color3: '#796a49',
    //         image2: img25,
    //         image3: color12,
    //         image4: color13,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "7",
    //         name: "Ignite Smart Watch",
    //         image1: img260,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         off: '50% OFF',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#D7BCA7',
    //         color2: '#000000',
    //         color3: '#CCC5BB',
    //         image2: img30,
    //         image3: color14,
    //         image4: color15,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "8",
    //         name: "Ignite Smart Watch",
    //         image1: img270,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'gold',
    //         color2: 'black',
    //         color3: '#173B85',
    //         image2: img27,
    //         image3: color16,
    //         image4: color17,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "9",
    //         name: "Ignite Smart Watch",
    //         image1: img280,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#C9C9C9',
    //         color3: 'black',
    //         image2: img28,
    //         image3: color18,
    //         image4: color19,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "10",
    //         name: "Ignite Smart Watch",
    //         image1: img250,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'grey',
    //         color3: '#796a49',
    //         image2: img25,
    //         image3: color12,
    //         image4: color13,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "11",
    //         name: "Ignite Smart Watch",
    //         image1: img300,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#D7BCA7',
    //         color2: '#000000',
    //         color3: '#CCC5BB',
    //         image2: img30,
    //         image3: color14,
    //         image4: color15,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "12",
    //         name: "Ignite Smart Watch",
    //         image1: img310,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: 'black',
    //         color3: '#173B85',
    //         image2: img31,
    //         image3: img31,
    //         image4: color22,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "13",
    //         name: "Ignite Smart Watch",
    //         image1: img320,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#C26722',
    //         color3: '#222F4F',
    //         image2: img32,
    //         image3: color23,
    //         image4: color24,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "14",
    //         name: "Ignite Smart Watch",
    //         image1: img330,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: '#C9C9C9',
    //         color3: '#9A734C',
    //         image2: img33,
    //         image3: color25,
    //         image4: color26,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "15",
    //         name: "Ignite Smart Watch",
    //         image1: img340,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: '#7B3042',
    //         color3: '#AEAEAE',
    //         image2: img34,
    //         image3: color27,
    //         image4: color28,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "16",
    //         name: "Ignite Smart Watch",
    //         image1: img350,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: '#D7D6D6',
    //         color3: 'grey',
    //         image2: img22,
    //         image3: color6,
    //         image4: color7,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "17",
    //         name: "Ignite Smart Watch",
    //         image1: img360,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'silver',
    //         color2: '#D7BCA7',
    //         color3: 'black',
    //         image2: img36,
    //         image3: color29,
    //         image4: color30,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "18",
    //         name: "Ignite Smart Watch",
    //         image1: img370,
    //         off: '50% OFF',
    //         price: 5999,
    //         rating: 4.77,
    //         discription: 'AMOLD Display',
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#485742',
    //         color3: 'grey',
    //         image2: img20,
    //         image3: color1,
    //         image4: color2,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "19",
    //         name: "Ignite Smart Watch",
    //         image1: img380,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#0053C7',
    //         color2: '#FF8A63',
    //         color3: '#E6E0D9',
    //         image2: img38,
    //         image3: color32,
    //         image4: color33,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "20",
    //         name: "Ignite Smart Watch",
    //         image1: img390,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: '#C9C9C9',
    //         color3: '#9A734C',
    //         image2: img33,
    //         image3: color25,
    //         image4: color26,
    //         temp: [
    //             { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
    //             { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "21",
    //         name: "Ignite Smart Watch",
    //         image1: img400,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'BEST SELLER',
    //         off: '50% OFF',
    //         count: '',
    //         text: 'Active Noise Cancellation | Fawad Khan Recommended',
    //         color1: '#414141',
    //         color2: '#e0e9c2',
    //         color3: '#b5d5d6',
    //         image2: extract1,
    //         temp: [
    //             { image2: [{ fig1: extract1 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
    //             { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "22",
    //         name: "Ignite Smart Watch",
    //         image1: img410,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         text: 'Active Noise Cancellation | Fawad Khan Recommended',
    //         off: '50% OFF',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#159C23',
    //         color3: '#E3E3E3',
    //         image2: img41,
    //         image3: color36,
    //         image4: color37,
    //         temp: [
    //             { image2: [{ fig1: extract29 }, { fig2: extract30 }, { fig3: extract31 }, { fig4: extract32 }], },
    //             { image3: [{ fig1: extract34 }, { fig2: extract35 }, { fig3: extract36 }, { fig4: extract37 }], },
    //             { image4: [{ fig1: extract38 }, { fig2: extract39 }, { fig3: extract40 }, { fig4: extract41 }], },
    //             { image5: [{ fig1: extract42 }, { fig2: extract43 }, { fig3: extract47 }, { fig4: extract48 }, { fig5: extract33 }], },
    //         ],
    //     },
    //     {
    //         id: "23",
    //         name: "Quantum Earbuds",
    //         image1: img420,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         text: 'Active Noise Cancellation | Fawad Khan Recommended',
    //         rating: 4.77,
    //         label: 'BEST SELLER',
    //         count: '',
    //         color1: '#398D3B',
    //         color2: '#000000',
    //         color3: '#9C0505',
    //         image2: img42,
    //         image3: color38,
    //         image4: color39,
    //         temp: [
    //             { image2: [{ fig1: extract49 }, { fig2: extract50 }, { fig3: extract51 }, { fig4: extract52 }, { fig5: extract53 }, { fig6: extract54 }], },
    //             { image3: [{ fig1: extract55 }, { fig2: extract56 }, { fig3: extract57 }, { fig4: extract58 }, { fig5: extract59 }, { fig6: extract60 }], },
    //             { image4: [{ fig1: extract61 }, { fig2: extract62 }, { fig3: extract63 }, { fig4: extract64 }, { fig5: extract65 }, { fig6: extract66 }], },
    //             { image5: [{ fig1: extract68 }, { fig2: extract69 }, { fig3: extract70 }, { fig4: extract71 }, { fig5: extract72 }, { fig6: extract73 }], },
    //             { image6: [{ fig1: extract74 }, { fig2: extract75 }, { fig3: extract76 }, { fig4: extract78 }, { fig4: extract79 }, { fig4: extract80 }], }
    //         ],
    //     },
    //     {
    //         id: "24",
    //         name: "Ignite Smart Watch",
    //         image1: img430,
    //         off: '50% OFF',
    //         discription: 'AMOLD Display',
    //         price: 5999,
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#5A274C',
    //         color3: '#f6f6f6',
    //         image2: img43,
    //         image3: color40,
    //         image4: color41,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "25",
    //         name: "Ignite Smart Watch",
    //         image1: img440,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#173B85',
    //         color2: 'white',
    //         color3: 'brown',
    //         image2: img44,
    //         image3: color41,
    //         image4: color39,
    //         temp: [
    //             { image2: [{ fig1: extract118 }, { fig2: extract119 }, { fig3: extract120 }, { fig4: extract121 }, { fig5: extract122 }, { fig6: extract123 }], },
    //             { image3: [{ fig1: extract124 }, { fig2: extract125 }, { fig3: extract126 }, { fig4: extract127 }, { fig5: extract128 }, { fig6: extract129 }], },
    //             { image4: [{ fig1: extract131 }, { fig2: extract132 }, { fig3: extract133 }, { fig4: extract134 }, { fig5: extract135 }, { fig6: extract136 }], },
    //         ],
    //     },
    //     {
    //         id: "26",
    //         name: "Ignite Smart Watch",
    //         image1: img450,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'black',
    //         color2: 'white',
    //         color3: '#096122',
    //         image2: img45,
    //         image3: color41,
    //         image4: img42,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract138 }, { fig3: extract139 }, { fig4: extract140 }, { fig5: extract141 }, { fig6: extract142 }], },
    //             { image3: [{ fig1: extract143 }, { fig2: extract144 }, { fig3: extract145 }, { fig4: extract146 }, { fig5: extract147 }, { fig6: extract148 }], },
    //             { image4: [{ fig1: extract149 }, { fig2: extract150 }, { fig3: extract151 }, { fig4: extract152 }, { fig5: extract153 }, { fig6: extract154 }], },
    //             { image5: [{ fig1: extract155 }, { fig2: extract156 }, { fig3: extract157 }, { fig4: extract158 }, { fig5: extract159 }, { fig6: extract160 }], },
    //         ],
    //     },
    //     {
    //         id: "27",
    //         name: "Ignite Smart Watch",
    //         image1: img460,
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         off: '50% OFF',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#CCCCCC',
    //         color3: 'green',
    //         image2: img46,
    //         image3: color46,
    //         image4: color47,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "28",
    //         name: "Ignite Smart Watch",
    //         image1: img470,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#159C23',
    //         color2: '#000000',
    //         color3: '#999aa1',
    //         image2: img47,
    //         image3: color48,
    //         image4: color49,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
    //             { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "29",
    //         name: "Ignite Smart Watch",
    //         image1: img480,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'white',
    //         color3: 'white',
    //         image2: img48,
    //         image3: color50,
    //         image4: color50,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "30",
    //         name: "Ignite Smart Watch",
    //         image1: img490,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#484774',
    //         color3: '#F1F1F1',
    //         image2: img49,
    //         image3: color51,
    //         image4: color52,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "31",
    //         name: "Ignite Smart Watch",
    //         image1: img500,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#eae9f4',
    //         color3: '#005BD3',
    //         image2: img50,
    //         image3: color53,
    //         image4: color54,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
    //             { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
    //             { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
    //             { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
    //             { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
    //         ],
    //     },
    //     {
    //         id: "32",
    //         name: "Ignite Smart Watch",
    //         image1: img510,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'white',
    //         color3: 'white',
    //         image2: img51,
    //         image3: color55,
    //         image4: color55,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "33",
    //         name: "Ignite Smart Watch",
    //         image1: img520,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'white',
    //         color2: 'black',
    //         color3: 'white',
    //         image2: img52,
    //         image3: color56,
    //         image4: img52,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "34",
    //         name: "Ignite Smart Watch",
    //         image1: img530,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: 'white',
    //         color3: '#173B85',
    //         image2: img53,
    //         image3: color57,
    //         image4: color58,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "35",
    //         name: "Ignite Smart Watch",
    //         image1: img540,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#BEBEBE',
    //         color3: '#056C14',
    //         image2: img54,
    //         image3: color62,
    //         image4: color61,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "36",
    //         name: "Ignite Smart Watch",
    //         image1: img550,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#159C23',
    //         color3: '#DFABFA',
    //         image2: img55,
    //         image3: color61,
    //         image4: color62,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "37",
    //         name: "Ignite Smart Watch",
    //         image1: img560,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#159C23',
    //         color3: '#0C7DCF',
    //         image2: img56,
    //         image3: color63,
    //         image4: color67,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "38",
    //         name: "Ignite Smart Watch",
    //         image1: img570,
    //         off: '50% OFF',
    //         price: 5999,
    //         rating: 4.77,
    //         discription: 'AMOLD Display',
    //         label: 'Best Seller',
    //         count: '',
    //         color1: 'blue',
    //         color2: 'maroon',
    //         color3: 'white',
    //         image2: img57,
    //         image3: color68,
    //         image4: color69,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "39",
    //         name: "Ignite Smart Watch",
    //         image1: img580,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#000000',
    //         color2: '#485742',
    //         color3: 'grey',
    //         image2: img58,
    //         image3: color70,
    //         image4: color71,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    //     {
    //         id: "40",
    //         name: "Ignite Smart Watch",
    //         image1: img590,
    //         off: '50% OFF',
    //         price: 5999,
    //         discription: 'AMOLD Display',
    //         rating: 4.77,
    //         label: 'Best Seller',
    //         count: '',
    //         color1: '#EAD8AB',
    //         color2: '#000000',
    //         color3: '#005BD3',
    //         image2: img59,
    //         image3: color72,
    //         image4: color73,
    //         temp: [
    //             { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
    //             { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
    //             { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
    //             { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
    //             { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
    //         ],
    //     },
    // ],
    sales: [
        // {
        //     id: "1",
        //     name: "Ignite Smart Watch",
        //     image1: img400,
        //     price:  5999,
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'BEST SELLER',
        //     off: '50% OFF',
        //     count: '',
        //     text: 'Active Noise Cancellation | Fawad Khan Recommended',
        //     color1: '#414141',
        //     color2: '#e0e9c2',
        //     color3: '#b5d5d6',
        //     image2: extract1,
        //     temp: [
        //         { image2: [{ fig1: extract1 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
        //         { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
        //         { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
        //         { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
        //         { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        //     ],
        // },
        // {
        //     id: "2",
        //     name: "Ignite Smart Watch",
        //     image1: img410,
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     text: 'Active Noise Cancellation | Fawad Khan Recommended',
        //     off: '50% OFF',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#159C23',
        //     color3: '#E3E3E3',
        //     image2: img41,
        //     image3: color36,
        //     image4: color37,
        //     temp: [
        //         { image2: [{ fig1: extract29 }, { fig2: extract30 }, { fig3: extract31 }, { fig4: extract32 }], },
        //         { image3: [{ fig1: extract34 }, { fig2: extract35 }, { fig3: extract36 }, { fig4: extract37 }], },
        //         { image4: [{ fig1: extract38 }, { fig2: extract39 }, { fig3: extract40 }, { fig4: extract41 }], },
        //         { image5: [{ fig1: extract42 }, { fig2: extract43 }, { fig3: extract47 }, { fig4: extract48 }, { fig5: extract33 }], },
        //     ],
        // },
        // {
        //     id: "3",
        //     name: "Quantum Earbuds",
        //     image1: img420,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     text: 'Active Noise Cancellation | Fawad Khan Recommended',
        //     rating: 4.77,
        //     label: 'BEST SELLER',
        //     count: '',
        //     color1: '#398D3B',
        //     color2: '#000000',
        //     color3: '#9C0505',
        //     image2: img42,
        //     image3: color38,
        //     image4: color39,
        //     temp: [
        //         { image2: [{ fig1: extract49 }, { fig2: extract50 }, { fig3: extract51 }, { fig4: extract52 }, { fig5: extract53 }, { fig6: extract54 }], },
        //         { image3: [{ fig1: extract55 }, { fig2: extract56 }, { fig3: extract57 }, { fig4: extract58 }, { fig5: extract59 }, { fig6: extract60 }], },
        //         { image4: [{ fig1: extract61 }, { fig2: extract62 }, { fig3: extract63 }, { fig4: extract64 }, { fig5: extract65 }, { fig6: extract66 }], },
        //         { image5: [{ fig1: extract68 }, { fig2: extract69 }, { fig3: extract70 }, { fig4: extract71 }, { fig5: extract72 }, { fig6: extract73 }], },
        //         { image6: [{ fig1: extract74 }, { fig2: extract75 }, { fig3: extract76 }, { fig4: extract78 }, { fig4: extract79 }, { fig4: extract80 }], }
        //     ],
        // },
        // {
        //     id: "4",
        //     name: "Ignite Smart Watch",
        //     image1: img430,
        //     off: '50% OFF',
        //     discription: 'AMOLD Display',
        //     price: "Rs.5999",
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#5A274C',
        //     color3: '#f6f6f6',
        //     image2: img43,
        //     image3: color40,
        //     image4: color41,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "5",
        //     name: "Ignite Smart Watch",
        //     image1: img440,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#173B85',
        //     color2: 'white',
        //     color3: 'brown',
        //     image2: img44,
        //     image3: color41,
        //     image4: color39,
        //     temp: [
        //         { image2: [{ fig1: extract118 }, { fig2: extract119 }, { fig3: extract120 }, { fig4: extract121 }, { fig5: extract122 }, { fig6: extract123 }], },
        //         { image3: [{ fig1: extract124 }, { fig2: extract125 }, { fig3: extract126 }, { fig4: extract127 }, { fig5: extract128 }, { fig6: extract129 }], },
        //         { image4: [{ fig1: extract131 }, { fig2: extract132 }, { fig3: extract133 }, { fig4: extract134 }, { fig5: extract135 }, { fig6: extract136 }], },
        //     ],
        // },
        // {
        //     id: "6",
        //     name: "Ignite Smart Watch",
        //     image1: img450,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: 'black',
        //     color2: 'white',
        //     color3: '#096122',
        //     image2: img45,
        //     image3: color41,
        //     image4: img42,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract138 }, { fig3: extract139 }, { fig4: extract140 }, { fig5: extract141 }, { fig6: extract142 }], },
        //         { image3: [{ fig1: extract143 }, { fig2: extract144 }, { fig3: extract145 }, { fig4: extract146 }, { fig5: extract147 }, { fig6: extract148 }], },
        //         { image4: [{ fig1: extract149 }, { fig2: extract150 }, { fig3: extract151 }, { fig4: extract152 }, { fig5: extract153 }, { fig6: extract154 }], },
        //         { image5: [{ fig1: extract155 }, { fig2: extract156 }, { fig3: extract157 }, { fig4: extract158 }, { fig5: extract159 }, { fig6: extract160 }], },
        //     ],
        // },
        // {
        //     id: "7",
        //     name: "Ignite Smart Watch",
        //     image1: img460,
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     off: '50% OFF',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#CCCCCC',
        //     color3: 'green',
        //     image2: img46,
        //     image3: color46,
        //     image4: color47,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "8",
        //     name: "Ignite Smart Watch",
        //     image1: img470,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#159C23',
        //     color2: '#000000',
        //     color3: '#999aa1',
        //     image2: img47,
        //     image3: color48,
        //     image4: color49,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
        //         { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
        //         { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
        //         { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
        //         { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        //     ],
        // },
        // {
        //     id: "9",
        //     name: "Ignite Smart Watch",
        //     image1: img480,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: 'white',
        //     color3: 'white',
        //     image2: img48,
        //     image3: color50,
        //     image4: color50,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "10",
        //     name: "Ignite Smart Watch",
        //     image1: img490,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#484774',
        //     color3: '#F1F1F1',
        //     image2: img49,
        //     image3: color51,
        //     image4: color52,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "11",
        //     name: "Ignite Smart Watch",
        //     image1: img500,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#eae9f4',
        //     color3: '#005BD3',
        //     image2: img50,
        //     image3: color53,
        //     image4: color54,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
        //         { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
        //         { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
        //         { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
        //         { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
        //     ],
        // },
        // {
        //     id: "12",
        //     name: "Ignite Smart Watch",
        //     image1: img510,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: 'white',
        //     color3: 'white',
        //     image2: img51,
        //     image3: color55,
        //     image4: color55,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "13",
        //     name: "Ignite Smart Watch",
        //     image1: img520,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: 'white',
        //     color2: 'black',
        //     color3: 'white',
        //     image2: img52,
        //     image3: color56,
        //     image4: img52,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "14",
        //     name: "Ignite Smart Watch",
        //     image1: img530,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: 'white',
        //     color3: '#173B85',
        //     image2: img53,
        //     image3: color57,
        //     image4: color58,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "15",
        //     name: "Ignite Smart Watch",
        //     image1: img540,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#BEBEBE',
        //     color3: '#056C14',
        //     image2: img54,
        //     image3: color62,
        //     image4: color61,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "16",
        //     name: "Ignite Smart Watch",
        //     image1: img550,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#159C23',
        //     color3: '#DFABFA',
        //     image2: img55,
        //     image3: color61,
        //     image4: color62,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "17",
        //     name: "Ignite Smart Watch",
        //     image1: img560,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#159C23',
        //     color3: '#0C7DCF',
        //     image2: img56,
        //     image3: color63,
        //     image4: color67,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "18",
        //     name: "Ignite Smart Watch",
        //     image1: img570,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     rating: 4.77,
        //     discription: 'AMOLD Display',
        //     label: 'Best Seller',
        //     count: '',
        //     color1: 'blue',
        //     color2: 'maroon',
        //     color3: 'white',
        //     image2: img57,
        //     image3: color68,
        //     image4: color69,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "19",
        //     name: "Ignite Smart Watch",
        //     image1: img580,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#000000',
        //     color2: '#485742',
        //     color3: 'grey',
        //     image2: img58,
        //     image3: color70,
        //     image4: color71,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
        // {
        //     id: "20",
        //     name: "Ignite Smart Watch",
        //     image1: img590,
        //     off: '50% OFF',
        //     price: "Rs.5999",
        //     discription: 'AMOLD Display',
        //     rating: 4.77,
        //     label: 'Best Seller',
        //     count: '',
        //     color1: '#EAD8AB',
        //     color2: '#000000',
        //     color3: '#005BD3',
        //     image2: img59,
        //     image3: color72,
        //     image4: color73,
        //     temp: [
        //         { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
        //         { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
        //         { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
        //         { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
        //         { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
        //     ],
        // },
    ],
    mixture: [
        {
            id: "1",
            name: "Ignite Smart Watch",
            image1: img500,
            off: '50% OFF',
            price: "Rs.5999",
            discription: 'AMOLD Display',
            rating: 4.77,
            label: 'Best Seller',
            count: '',
            color1: '#000000',
            color2: '#eae9f4',
            color3: '#005BD3',
            image2: img50,
            image3: color53,
            image4: color54,
            temp: [
                { image2: [{ fig1: extract81 }, { fig2: extract2 }, { fig3: extract3 }, { fig4: extract4 }, { fig5: extract5 }, { fig6: extract6 }], },
                { image3: [{ fig1: extract7 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
                { image4: [{ fig1: extract13 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
                { image5: [{ fig1: extract19 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
                { image6: [{ fig1: extract25 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
            ],
        },
        {
            id: "2",
            name: "Ignite Smart Watch",
            image1: img590,
            off: '50% OFF',
            price: "Rs.5999",
            discription: 'AMOLD Display',
            rating: 4.77,
            label: 'Best Seller',
            count: '',
            color1: '#EAD8AB',
            color2: '#000000',
            color3: '#005BD3',
            image2: img59,
            image3: color72,
            image4: color73,
            temp: [
                { image2: [{ fig1: extract81 }, { fig2: extract82 }, { fig3: extract83 }, { fig4: extract84 }, { fig5: extract85 }, { fig6: extract86 }], },
                { image3: [{ fig1: extract89 }, { fig2: extract90 }, { fig3: extract91 }, { fig4: extract92 }, { fig5: extract93 }, { fig6: extract94 }], },
                { image4: [{ fig1: extract97 }, { fig2: extract98 }, { fig3: extract99 }, { fig4: extract100 }, { fig5: extract101 }, { fig6: extract102 }], },
                { image5: [{ fig1: extract105 }, { fig2: extract106 }, { fig3: extract107 }, { fig4: extract108 }, { fig5: extract109 }, { fig6: extract110 }], },
                { image6: [{ fig1: extract113 }, { fig2: extract114 }, { fig3: extract115 }, { fig4: extract116 }, { fig4: extract117 }], }
            ],
        },
        {
            id: "3",
            name: "Ignite Smart Watch",
            image1: img230,
            off: '50% OFF',
            discription: 'AMOLD Display',
            price: "Rs.5999",
            rating: 4.77,
            label: 'Best Seller',
            count: '',
            color1: '#D7BCA7',
            color2: '#3863a1',
            color3: '#bfa27f',
            image2: img23,
            image3: color8,
            image4: color9,
            temp: [
                { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
                { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
                { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
                { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
                { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
            ],
        },
        {
            id: "4",
            name: "Ignite Smart Watch",
            image1: img210,
            price: "Rs.5999",
            discription: 'AMOLD Display',
            rating: 4.77,
            label: 'Best Seller',
            off: '50% OFF',
            count: '',
            color1: '#000000',
            color2: '#D7D6D6',
            color3: '#000000',
            image2: img21,
            image3: color4,
            image4: color5,
            temp: [
                { image2: [{ fig1: extract201 }, { fig2: extract202 }, { fig3: extract203 }, { fig4: extract204 }, { fig5: extract205 }, { fig6: extract206 }], },
                { image3: [{ fig1: extract207 }, { fig2: extract8 }, { fig3: extract9 }, { fig4: extract10 }, { fig5: extract11 }, { fig6: extract12 }], },
                { image4: [{ fig1: extract208 }, { fig2: extract14 }, { fig3: extract15 }, { fig4: extract16 }, { fig5: extract17 }, { fig6: extract18 }], },
                { image5: [{ fig1: extract209 }, { fig2: extract20 }, { fig3: extract21 }, { fig4: extract22 }, { fig5: extract23 }, { fig6: extract24 }], },
                { image6: [{ fig1: extract210 }, { fig2: extract26 }, { fig3: extract27 }, { fig4: extract28 }], }
            ],
        },
    ],
    quantity: 1,
    products,
    cartItems: getDefaultcard(),
}
const Reducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state, action) => {
            const productId = action.payload;
            state.cartItems[productId] += 1;
        },
        decrement: (state, action) => {
            const productId = action.payload;
            if (state.cartItems[productId] > 0) {
                state.cartItems[productId] -= 1;
            }
        },
    }
})




export const { increment, decrement, quantity, findProductById, cartItems, id } = Reducer.actions;
export default Reducer.reducer;