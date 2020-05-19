import * as React from "react";
import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  PrimaryButton,
  SelectableOptionMenuItemType,
} from "office-ui-fabric-react/lib/index";
import { MonthOptionSetInterface, Month } from "../interfaces";

const comboBoxBasicOptions: IComboBoxOption[] = [
  {
    key: "Header1",
    text: "View by Month",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "A", text: "January" },
  { key: "B", text: "Febuary" },
  { key: "C", text: "March" },
  { key: "D", text: "April" },
  { key: "E", text: "May" },
  { key: "F", text: "June" },
  { key: "G", text: "July" },
  { key: "H", text: "August" },
  { key: "I", text: "September" },
  { key: "J", text: "October" },
  { key: "L", text: "November" },
  { key: "M", text: "December" },
];

const comboBoxMultiStyle = {
  maxWidth: 300,
  display: "block",
  marginTop: "10px",
};

export const MonthOptionSet: React.FC<MonthOptionSetInterface> = (props) => {
  const comboBoxRef = React.useRef<IComboBox>(null);
  const onOpenClick = React.useCallback(() => {
    comboBoxRef.current?.focus(true);
    // handleRefChange(comboBoxRef.current);
  }, []);

  function handleRefChange(event: React.FormEvent<IComboBox>) {
    // const month = comboBoxRef.current?.selectedOptions[0].key;
    // props.handleSetMonth(month);
    const monthKey = comboBoxRef.current?.selectedOptions[0].key;
    props.handleSetMonth(monthKey);
  }

  // comboBoxRef.current.componentDidUpdate()
  return (
    <div>
      <ComboBox
        componentRef={comboBoxRef}
        defaultSelectedKey={"A"}
        label="Basic ComboBox"
        allowFreeform
        autoComplete="on"
        options={comboBoxBasicOptions}
        onChange={(event) => handleRefChange(event)}
      />
      <PrimaryButton
        text="Open ComboBox"
        style={comboBoxMultiStyle}
        onClick={onOpenClick}
      />
    </div>
  );
};
