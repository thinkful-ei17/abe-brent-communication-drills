import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rate = 10;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

