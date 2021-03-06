import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

@observer
class EmploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.employment
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "employment",
      label: "Employment Income",
      showMilitaryCaveat: person.incomeTypes.military.isApplicable,
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>
        <IncomeSource incomeSources={incomeSources} name="salaryWages"
                      showHourly={true} showAnnual={true}>
          <FormattedMessage
              id="app.slides.employmentIncome.salaryWages"
              description="Salary / Wages"
              defaultMessage="Salary / Wages"
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="tips">
          <FormattedMessage
              id="app.slides.employmentIncome.tips"
              description="Tips"
              defaultMessage="Tips"
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="commission">
          <FormattedMessage
              id="app.slides.employmentIncome.commission"
              description="Commission"
              defaultMessage="Commission"
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} showAnnual={true} name="cashBonus">
                <Tooltipcomp text={tooltiptext.cashBonus}>
                          <FormattedMessage
                              id="app.slides.employmentIncome.tooltipCashBonus"
                              description="Cash bonus tooltip"
                              defaultMessage="Cash bonus"
                          />
                </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} showHourly={true} showAnnual={true} name="selfEmployment">
          <FormattedMessage
              id="app.slides.employmentIncome.selfEmployment"
              description="Cash bonus"
              defaultMessage="Net income from &nbsp;{tooltip}"
              values={{
                tooltip: <Tooltipcomp text={tooltiptext.selfEmployment}>
                          <FormattedMessage
                              id="app.slides.employmentIncome.tooltipSelf"
                              description="self-employment"
                              defaultMessage="self-employment"
                          />
                        </Tooltipcomp>
              }}
          />
        </IncomeSource>
      </IncomeType>
    )
  }
}

EmploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default EmploymentIncome
