export const InputBox = (props) => {
  return (
    <>
      <label className="all_page_my_label_new">{props.label}</label>
      <input
        type={props.type}
        className="form-control intput_box"
        placeholder={props.placeholder}
      />
    </>
  );
};
export const TextareaBox = (props) => {
  return (
    <>
      <label className="all_page_my_label_new ">{props.label}</label>
      <textarea
        className="form-control textareaBox_box"
        rows={props.rows}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};
export const SelectBox = (props) => {
  const App = (props) => {
    return (
      <>
        <option value={props.value}>{props.option}</option>
      </>
    );
  };
  return (
    <>
      <label className="all_page_my_label_new ">{props.label}</label>
      <select className="form-select SelectBox_box">
        {props.SelectBoxData.map((val, i) => {
          return (
            <App key={i} optionValue={val.optionValue} option={val.option} />
          );
        })}
      </select>
    </>
  );
};
