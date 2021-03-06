import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


//F28, F26, F27, F24, F16, D10-11, D5

export default class SpousalIncome extends Component {
  render() {
    return (
      <Article>
        <NotTheSame />
        <Topic title={help.grossTitle} body={help.grossBody} />
        <Topic title={help.netTitle} body={help.netBody} />
        <WhatIncome />
        <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
        <bodyLabels>Definitions</bodyLabels>
        <Topic title={define.alimonyTerm} body={define.alimonyDef} />
        <Topic title={define.childSupportTerm} body={define.childSupportDef} />
       	<Topic title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
