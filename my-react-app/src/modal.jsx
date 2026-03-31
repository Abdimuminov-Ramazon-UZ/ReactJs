import ReactDom from "react-dom";
// we create other id for new elements.And we get getElementbyId and use createPortal metod from reactdom.So we use it for avoid root's complex css styles 
export const Modal = () => {
  return ReactDom.createPortal(
    <div>Modaled portal</div>,
    document.getElementById("portal"),
  );
};
