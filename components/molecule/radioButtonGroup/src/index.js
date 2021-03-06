import React, {useState} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomRadioButtonGroup'

const AtomRadioButtonGroup = ({
  id,
  value: initValue,
  onChange: onChangeFromProps,
  children,
  name,
  ...props
}) => {
  const [value, setValue] = useState(initValue)

  const handleChangeGroup = (e, {name, value: innerValue}) => {
    setValue(innerValue)
    onChangeFromProps(e, {name, value: innerValue})
  }

  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      const {
        props: {value: childValue}
      } = child
      const checked = value === childValue
      const onChange = handleChangeGroup
      return React.cloneElement(child, {
        ...props,
        checked,
        onChange,
        name
      })
    })

  return <div className={BASE_CLASS}>{extendedChildren}</div>
}

AtomRadioButtonGroup.displayName = 'AtomRadioButton'

AtomRadioButtonGroup.defaultProps = {
  checked: false
}

AtomRadioButtonGroup.propTypes = {
  /* children */
  children: PropTypes.any,

  /* name */
  name: PropTypes.string,

  /* The DOM id global attribute. */
  id: PropTypes.string.isRequired,

  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /* Mark the input as selected */
  checked: PropTypes.bool,

  /* onChange callback */
  onChange: PropTypes.func.isRequired,

  /* Value assigned to the radio button */
  value: PropTypes.string
}

export default AtomRadioButtonGroup
