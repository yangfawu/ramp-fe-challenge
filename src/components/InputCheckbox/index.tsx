import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  // problem: an onchange was on the input tag, but it is set to display:none
  //  this means the onchange event will never trigger because we are just clicking on a label
  //  the label is designed to mimic a checkbox
  const toggle = () => {
    const checkbox = document.getElementById(inputId)
    if (!checkbox) return
    checkbox.click()
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={toggle}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
