import React from 'react';
import DrumPad from './components/DrumPad';
import './App.css';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
];

const banks = [bankOne, bankTwo];

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.onVolumeChange = this.onVolumeChange.bind(this);
    this.onBankChange = this.onBankChange.bind(this);
    this.onDisplayText = this.onDisplayText.bind(this);

    this.state = {
      bankIndex: 0,
      volumeValue: 50,
      displayText: 'DRUM MACHINE'
    }
  }

  onVolumeChange({ target }) {
    console.log('onVolumeChange');
    console.log(target.value);

    this.setState({
      volumeValue: target.value
    });
  }

  onBankChange({ target }) {
    console.log('onBankChange');

    const bankIndex = target.checked ? 1 : 0;
    this.setState ({
      bankIndex: bankIndex,
      displayText: this.state.bankIndex ? 'Heater Kit' : 'Piano Kit'
    });
  }

  onDisplayText(text) {
    console.log('updateDisplayText');

    this.setState({
      displayText: text
    });
  }

  render() {
    return (
      <div className='drum-machine' id='drum-machine'>

        <div className='drum-display' id='display'>
          <h2>{this.state.displayText}</h2>
        </div>

        <div className='drum-control'>
          <div className='drum-control-volume'>
            <span>Volume: </span>
            <span className='drum-control-volume-value'>{this.state.volumeValue}</span>
            <input type='range' onInput={this.onVolumeChange} />
          </div>
        </div>

        <div className='drum-control-bank'>
          <div>{this.state.bankIndex ? 'Piano Kit' : 'Heater Kit'}</div>
          <label className='switch' title='Switch bank'>
            <input type='checkbox' onChange={this.onBankChange} />
            <span className='slider round'></span>
          </label>
        </div>

        <div className='drum-pads'>
          {
            banks[this.state.bankIndex].map((item, idx) => {
              return <DrumPad
                padItem={item}
                key={idx}
                updateDisplayText={this.onDisplayText}
                volumeValue={this.state.volumeValue}
              />
            })
          }
        </div>

        <div className='drum-footer'>
          Made by <a href='https://twitter.com/EdgardoRios' target='_blank' rel="noopener noreferrer">Edgardo Rios</a>
        </div>

      </div>
    );
  }
}

export default App;
