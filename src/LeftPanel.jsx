import {useState} from 'react'
import Dmm from './Dmm'
import './App.css'
import Vector from './assets/Vector.png' 

const LeftPanel = () => {

  const [value, setValue] = useState({ min: 0, max: 100 });
 
  const [first, setFirst] = useState(0)
  const [firs, setFirs] = useState(1)
  const [fi, setFi] = useState('left')
  const [f, setF] = useState('left active')

  const [g, setG] = useState('text')
  const [h, setH] = useState('text active')

  const [j, setJ] = useState('text')
  const [k, setK] = useState('text active')

  const [l, setL] = useState('text')
  const [p, setP] = useState('text active')

  const [o, setO] = useState('text')
  const [i, setI] = useState('text active')

  const [u, setU] = useState('text')
  const [y, setY] = useState('text active')

  const [t, setT] = useState('text')
  const [r, setR] = useState('text active')



  const [ga, setGa] = useState('text')
  const [ha, setHa] = useState('text active')

  const [jaa, setJaa] = useState('text')
  const [kaa, setKaa] = useState('text active')

  const [la, setLa] = useState('text')
  const [pa, setPa] = useState('text active')

  const [oa, setOa] = useState('text')
  const [ia, setIa] = useState('text active')

  const [ua, setUa] = useState('text')
  const [ya, setYa] = useState('text active')

  const [ta, setTa] = useState('text')
  const [ra, setRa] = useState('text active')



  const [e, setE] = useState('text')
  const [w, setW] = useState('text active')

  const [q, setQ] = useState('text')
  const [a, setA] = useState('text active')

  const [s, setS] = useState('text')
  const [d, setD] = useState('text active')

  const [sa, setSa] = useState('text')
  const [da, setDa] = useState('text active')

  const [sss, setSSS] = useState('text')
  const [ddd, setDDD] = useState('text active')

  const [x, setX] = useState('text')
  const [z, setZ] = useState('text active')
  
  const [jj, setJJ] = useState('text')
  const [kk, setKK] = useState('text active')

  const [jja, setJJa] = useState('text')
  const [kka, setKKa] = useState('text active')

  const [ja, setJa] = useState('text')
  const [ka, setKa] = useState('text active')

  const [jjj, setJJJ] = useState('text')
  const [kkk, setKKK] = useState('text active')

  const [jaj, setJaJ] = useState('text')
  const [kak, setKaK] = useState('text active')
  const [ea, setEa] = useState('text')
  const [wa, setWa] = useState('text active')

  const [qa, setQa] = useState('text')
  const [aa, setAa] = useState('text active')

  const [saa, setSaa] = useState('text')
  const [daa, setDaa] = useState('text active')

  const [saaa, setSaaa] = useState('text')
  const [daaa, setDaaa] = useState('text active')

  const [sssa, setSSSa] = useState('text')
  const [ddda, setDDDa] = useState('text active')

  const [xa, setXa] = useState('text')
  const [za, setZa] = useState('text active')

  const [xaaa, setXaaa] = useState('text')
  const [zaaa, setZaaa] = useState('text active')
  
  const [jjaa, setJJaa] = useState('text')
  const [kkaa, setKKaa] = useState('text active')

  const [jaaa, setJaaa] = useState('text')
  const [kaaa, setKaaa] = useState('text active')

  const [jjja, setJJJa] = useState('text')
  const [kkka, setKKKa] = useState('text active')

  const [jaja, setJaJa] = useState('text')
  const [kaka, setKaKa] = useState('text active')

  const [sssaa, setSSSaa] = useState('text')
  const [dddaa, setDDDaa] = useState('text active')


  const [eaa, setEaa] = useState('text1')
  const [waa, setWaa] = useState('text1 active1')

  const [qaa, setQaa] = useState('text1')
  const [aaa, setAaa] = useState('text1 active1')

  const [saaad, setSaaad] = useState('text1')
  const [daaad, setDaaad] = useState('text1 active1')

  const [saaaa, setSaaaa] = useState('text1')
  const [daaaa, setDaaaa] = useState('text1 active1')


  const [xaa, setXaa] = useState('text1')
  const [zaa, setZaa] = useState('text1 active1')
  
  



  return (
    <>
    <div className="bac">
      <div className="container">
        <div className="buttonParams">
            <div onClick={() => setFirst(firs)  || setFirs(first) || setFi(f) || setF(fi)    } className="box">
              <img src={Vector} alt="" className={fi} />
              <div className="right">Скрыть фильтры</div>
            </div>
        </div>
        {first ? <div className="boxParams">
          Категории товаров<div className="inner2">
            <div   className="elements"><input 
            
            class="custom-checkbox1"
            id="myCheckbox1" 
            type="checkbox" />
            <label onClick={() =>  setG(h) || setH(g) }  className={g} for="myCheckbox1">
            Сноуборды
            </label>
            <p className="p1">24</p></div>

            <div className="elements"><input class="custom-checkbox2"
            id="myCheckbox2" 
            type="checkbox" />
            <label onClick={() => setJ(k) || setK(j) } className={j} for="myCheckbox2">
            Крепления
            </label> 
            <p className="p2">48</p></div>

            <div className="elements"><input class="custom-checkbox3"
            id="myCheckbox3" 
            type="checkbox" />
            <label onClick={() => setL(p) || setP(l) } className={l} for="myCheckbox3">
            Обувь
            </label> 
            <p className="p3">60</p></div>

            <div className="elements"><input class="custom-checkbox4" id="myCheckbox4" 
            type="checkbox" />
            <label onClick={() => setO(i) || setI(o) } className={o} for="myCheckbox4">
            Наборы
            </label> 
            <p className="p4">13</p></div>

            <div className="elements"><input class="custom-checkbox5" id="myCheckbox5" 
            type="checkbox" />
            <label onClick={() => setU(y) || setY(u) } className={u} for="myCheckbox5">
            Куртки
            </label>  
            <p className="p5">81</p></div>

            <div className="elements"><input class="custom-checkbox6" id="myCheckbox6" 
            type="checkbox" />
            <label onClick={() => setT(r) || setR(t) } className={t} for="myCheckbox6">
            Штаны
            </label> 
            <p className="p6">55</p></div>

            <div className="elements"><input class="custom-checkbox7" id="myCheckbox7" 
            type="checkbox" />
            <label onClick={() => setE(w) || setW(e) } className={e} for="myCheckbox7">
            Шлемы
            </label>  
            <p className="p7">13</p></div>

            <div className="elements"><input class="custom-checkbox8" id="myCheckbox8" 
            type="checkbox" />
            <label onClick={() => setQ(a) || setA(q) } className={q} for="myCheckbox8">
            Очки
            </label>  
            <p className="p8">81</p></div>

            <div className="elements"><input class="custom-checkbox9" id="myCheckbox9" 
            type="checkbox" />
            <label onClick={() => setS(d) || setD(s) } className={s} for="myCheckbox9">
            Перчатки
            </label>  
            <p className="p9">55</p></div>

            
            
            
            </div>
          <div className="box2"><p className="vch">Смотреть</p><div className="inner3">
            <div   className="elements"><input 
            
            class="custom-checkbox10"
            id="myCheckbox10" 
            type="checkbox" />
            <label onClick={() => setX(z) || setZ(x) }  className={x} for="myCheckbox10">
            Все товары
            </label>
            <p className="p1">368</p></div>

            <div className="elements"><input class="custom-checkbox12"
            id="myCheckbox12" 
            type="checkbox" />
            <label onClick={() => setJJ(kk) || setKK(jj) } className={jj} for="myCheckbox12">
            Только со скидкой
            </label> 
            <p className="p2">48</p></div>

            </div> </div>
          <div className="box3"><p className="vch">Бренд</p><div>
            <input placeholder='Поиск' className='input' type="text" />
            </div>
            <div className="inner3">
              <div   className="elements">
                <input 
            
            class="custom-checkbox13"
            id="myCheckbox13" 
            type="checkbox" />
            <label onClick={() => setDDD(sss) || setSSS(ddd) }  className={sss} for="myCheckbox13">
            DC Shoes
            </label>
            <p className="p1">24</p></div>


            <div className="elements"><input class="custom-checkbox14"
            id="myCheckbox14" 
            type="checkbox" />
            <label onClick={() => setJJJ(kkk) || setKKK(jjj) } className={jjj} for="myCheckbox14">
            Quicksilver
            </label> 
            <p className="p2">48</p></div>


            <div className="elements"><input class="custom-checkbox15"
            id="myCheckbox15" 
            type="checkbox" />
            <label onClick={() => setJa(ka) || setKa(ja) } className={ja} for="myCheckbox15">
            BoardRiders
            </label> 
            <p className="p2">60</p></div>


            <div className="elements"><input class="custom-checkbox16"
            id="myCheckbox16" 
            type="checkbox" />
            <label onClick={() => setDa(sa) || setSa(da) } className={sa} for="myCheckbox16">
            Billabong
            </label> 
            <p className="p2">13</p></div>


            <div className="elements"><input class="custom-checkbox17"
            id="myCheckbox17" 
            type="checkbox" />
            <label onClick={() => setJJa(kka) || setKKa(jja) } className={jja} for="myCheckbox17">
            Quicksilver
            </label> 
            <p className="p2">81</p></div>



            <div className="elements"><input class="custom-checkbox18"
            id="myCheckbox18" 
            type="checkbox" />
            <label onClick={() => setJaJ(kak) || setKaK(jaj) } className={jaj} for="myCheckbox18">
            The Tree
            </label> 
            <p className="p2">55</p></div></div></div>


          <div className="box4"><p className="vch">Размер</p><div className="inner4">
          <div   className="elements"><input 
            
            class="custom-checkbox19"
            id="myCheckbox19" 
            type="checkbox" />
            <label onClick={() =>  setGa(ha) || setHa(ga) }  className={ga} for="myCheckbox19">
            One Size
            </label>
            <p className="p1">24</p></div>

            <div className="elements"><input class="custom-checkbox20"
            id="myCheckbox20" 
            type="checkbox" />
            <label onClick={() => setJaa(kaa) || setKaa(jaa) } className={jaa} for="myCheckbox20">
            XS
            </label> 
            <p className="p2">48</p></div>

            <div className="elements"><input class="custom-checkbox21"
            id="myCheckbox21" 
            type="checkbox" />
            <label onClick={() => setLa(pa) || setPa(la) } className={la} for="myCheckbox21">
            S
            </label> 
            <p className="p3">60</p></div>

            <div className="elements"><input class="custom-checkbox22" id="myCheckbox22" 
            type="checkbox" />
            <label onClick={() => setOa(ia) || setIa(oa) } className={oa} for="myCheckbox22">
            S/M
            </label> 
            <p className="p4">13</p></div>

            <div className="elements"><input class="custom-checkbox23" id="myCheckbox23" 
            type="checkbox" />
            <label onClick={() => setUa(ya) || setYa(ua) } className={ua} for="myCheckbox23">
            M
            </label>  
            <p className="p5">81</p></div>

            <div className="elements"><input class="custom-checkbox24" id="myCheckbox24" 
            type="checkbox" />
            <label onClick={() => setTa(ra) || setRa(ta) } className={ta} for="myCheckbox24">
            M/L
            </label> 
            <p className="p6">55</p></div></div></div>
          <div className="box5">Цена, ₽<div className="filter">
            <input type="number" className="leftt" placeholder={value.min} />
            <div className="line"></div>
            <input type="number" className="rightt" placeholder={value.max}/>
            <button className='Ok'>Ok</button>

          </div>
          <div>
        <Dmm min={0} max={100} step={5} value={value} onChange={setValue} />
        
      </div>
            
          
              
        
          <div className="inner5">
          </div></div>
          <div className="box6"><p className="vch">Технологии</p><div className="inner6"><div   className="elements"><input 
            
            class="custom-checkbox25"
            id="myCheckbox25" 
            type="checkbox" />
            <label onClick={() =>  setWa(ea) || setEa(wa) }  className={ea} for="myCheckbox25">
            BOA
            </label>
            <p className="p1">24</p></div>

            <div className="elements"><input class="custom-checkbox26"
            id="myCheckbox26" 
            type="checkbox" />
            <label onClick={() => setAa(qa) || setQa(aa) } className={qa} for="myCheckbox26">
            Step On
            </label> 
            <p className="p2">48</p></div>

            <div className="elements"><input class="custom-checkbox27"
            id="myCheckbox27" 
            type="checkbox" />
            <label onClick={() => setDaa(saa) || setSaa(daa) } className={saa} for="myCheckbox27">
            Est
            </label> 
            <p className="p3">60</p></div>

            <div className="elements"><input class="custom-checkbox28" id="myCheckbox28" 
            type="checkbox" />
            <label onClick={() => setDaaa(saaa) || setSaaa(daaa) } className={saaa} for="myCheckbox28">
            Magne Traction
            </label> 
            <p className="p4">13</p></div>

            <div className="elements"><input class="custom-checkbox29" id="myCheckbox29" 
            type="checkbox" />
            <label onClick={() => setDDDa(sssa) || setSSSa(ddda) } className={sssa} for="myCheckbox29">
            The Channel
            </label>  
            <p className="p5">81</p></div>

            <div className="elements"><input class="custom-checkbox30" id="myCheckbox30" 
            type="checkbox" />
            <label onClick={() => setZa(xa) || setXa(za) } className={xa} for="myCheckbox30">
            Recco
            </label> 
            <p className="p6">55</p></div></div></div>
          <div className="box7"><p className="vch">Цвет</p><div className="inner7">
            <div   className="elements">
                <input 
            
            class="custom-checkbox31"
            id="myCheckbox31" 
            type="checkbox" />
            <label onClick={() => setXaaa(zaaa) || setZaaa(xaaa) }  className={xaaa} for="myCheckbox31">
            <div className="obj1"></div>Черный
            </label>
            <p className="p1">24</p></div>


            <div className="elements"><input class="custom-checkbox32"
            id="myCheckbox32" 
            type="checkbox" />
            <label onClick={() => setJJJa(kkka) || setKKKa(jjja) } className={jjja} for="myCheckbox32">
            <div className="obj2"></div>Белый
            </label> 
            <p className="p2">48</p></div>


            <div className="elements"><input class="custom-checkbox33"
            id="myCheckbox33" 
            type="checkbox" />
            <label onClick={() => setJaaa(kaaa) || setKaaa(jaaa) } className={jaaa} for="myCheckbox33">
            <div className="obj3"></div>Красный
            </label> 
            <p className="p2">60</p></div>


            <div className="elements"><input class="custom-checkbox35"
            id="myCheckbox35" 
            type="checkbox" />
            <label onClick={() => setDDDaa(sssaa) || setSSSaa(dddaa) } className={sssaa} for="myCheckbox35">
            <div className="obj4"></div>Синий
            </label> 
            <p className="p2">13</p></div>


            <div className="elements"><input class="custom-checkbox36"
            id="myCheckbox36" 
            type="checkbox" />
            <label onClick={() => setJJaa(kkaa) || setKKaa(jjaa) } className={jjaa} for="myCheckbox36">
            <div className="obj5"></div>Желтый
            </label> 
            <p className="p2">81</p></div>



            <div className="elements"><input class="custom-checkbox37"
            id="myCheckbox37" 
            type="checkbox" />
            <label onClick={() => setJaJa(kaka) || setKaKa(jaja) } className={jaja} for="myCheckbox37">
            <div className="obj6"></div>Оранжевый
            </label> 
            <p className="p2">55</p></div></div></div>
          <div className="box8"><p className="vch">Забрать сейчас: Москва</p><div className="inner8">

          <div   className="elements1"><input 
            
            class="custom-checkbox38"
            id="myCheckbox38" 
            type="checkbox" />
            <label onClick={() =>  setWaa(eaa) || setEaa(waa) }  className={eaa} for="myCheckbox38">
            Название магазина
            </label>
            <p className="o1">ул. Энтузиастов 45. Метро Бабушкинская</p></div>

            <div className="elements1"><input class="custom-checkbox39"
            id="myCheckbox39" 
            type="checkbox" />
            <label onClick={() => setAaa(qaa) || setQaa(aaa) } className={qaa} for="myCheckbox39">
            Название магазина
            </label> 
            <p className="o2">ул. Энтузиастов 45. Метро Бабушкинская</p></div>

            <div className="elements1"><input class="custom-checkbox40"
            id="myCheckbox40" 
            type="checkbox" />
            <label onClick={() => setDaaad(saaad) || setSaaad(daaad) } className={saaad} for="myCheckbox40">
            Название магазина
            </label> 
            <p className="o3">ул. Энтузиастов 45. Метро Бабушкинская</p></div>

            <div className="elements1"><input class="custom-checkbox41" id="myCheckbox41" 
            type="checkbox" />
            <label onClick={() => setDaaaa(saaaa) || setSaaaa(daaaa) } className={saaaa} for="myCheckbox41">
            Название магазина
            </label> 
            <p className="o4">ул. Энтузиастов 45. Метро Бабушкинская</p></div>

            <div className="elements1"><input class="custom-checkbox42" id="myCheckbox42" 
            type="checkbox" />
            <label onClick={() => setZaa(xaa) || setXaa(zaa) } className={xaa} for="myCheckbox42">
            Название магазина
            </label>  
            <p className="o5">ул. Энтузиастов 45. Метро Бабушкинская</p></div></div></div>
          
          
          </div> : '' } 
           
    </div>
    </div>
    
    </>
  )
}

export default LeftPanel