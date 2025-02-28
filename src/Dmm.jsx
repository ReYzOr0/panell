import './Dm.css'
import { useState,useEffect } from 'react';

const Dmm = ({ min, max, value, step, onChange }) => {

    const [minValue, setMinValue] = useState(value ? value.min : min);
    const [maxValue, setMaxValue] = useState(value ? value.max : max);

    

    useEffect(() => {
      if (value) {
        setMinValue(value.min);
        setMaxValue(value.max);
      }
    }, [value]);
  
    const handleMinChange = e => {
      e.preventDefault();
      const newMinVal = Math.min(+e.target.value, maxValue - step);
      if (!value) setMinValue(newMinVal);
      onChange({ min: newMinVal, max: maxValue });
    };
  
    const handleMaxChange = e => {
      e.preventDefault();
      const newMaxVal = Math.max(+e.target.value, minValue + step);
      if (!value) setMaxValue(newMaxVal);
      onChange({ min: minValue, max: newMaxVal });
    };
  
    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;
  
    return (
      <div class="wrapper">
        <div class="input-wrapper">
          <input
            class="input"
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            class="input"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>
  
        <div class="control-wrapper">
          <div class="control" style={{ left: `${minPos}%` }} />
          <div class="rail">
            <div
              class="inner-rail" 
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div class="control" style={{ left: `${maxPos}%` }} />
        </div>
      </div>

      
    );
    
  };

  

  export default Dmm;
  