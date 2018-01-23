import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           dayRate:0,
           hours:0,
           rate:0 
               
           
        };
    };

//function that updates hourlyRate
 updateHourlyRate(){
        
}
    render() {
        
        return (
            <form>
                <NumberInput inputValue={this.state.dayRate} onUpdate={e => this.setState({dayRate:e.currentTarget.value})} id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput inputValue={this.state.hours} onUpdate={e => this.setState({hours: e.currentTarget.value })} id="hours" label="Hours" min={1} max={12} />
                <Output  id="hourly-rate" label="Hourly rate" value={(this.state.hours * this.state.dayRate).toFixed(2)}
/>
            </form>
        );
    }
}

