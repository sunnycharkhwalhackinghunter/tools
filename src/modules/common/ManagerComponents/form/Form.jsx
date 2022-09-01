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
