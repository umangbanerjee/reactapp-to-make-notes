import { useState } from "react";
import styles from "./NavBar.module.css";
import { jsPDF } from "jspdf";

const NavBar = ({ obj, setObj, arr, setArr }) => {
  const [item, setItem] = useState(false);
  const [edit, setEdit] = useState(-1);


  // Default export is a4 paper, portrait, using millimeters for units
  const genratePDF = () => {
    const doc = new jsPDF();
    doc.text(obj.text , 10, 10);
    doc.save("a4.pdf");
  }


  const handleBtn = (event) => {
    event.preventDefault();
    setItem(!item);
    setObj({ title: "", text: "" });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (obj.title !== "") {
      arr[edit] = obj;
    }
  };

  const handleObj = (event) => {
    event.preventDefault();
    setObj({ ...obj, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setArr([...arr, obj]);
    setItem(false);
  };

  const handleDel = (i) => {
    {
      setArr(arr.filter((ele, ind) => i !== ind));
    }
  };

  const handleOpen = (i) => {
    {
      setObj(arr[i]);
      setEdit(i);
    }
  };

  return (
    <>
      <div className={styles.NavBarBox}>
        <div className={styles.addBox}>
        <span>Add Notes</span>  
          <button onClick={handleBtn} className={styles.plus}>
            <i className="fa-solid fa-file-circle-plus"></i>
          </button>
        </div>
        <button onClick={handleEdit} className={styles.edit}>
          Edit
        </button>

        {item && (
          <form onSubmit={handleSubmit}>
            <div className={styles.int}>
              <input
                type="text"
                id="title"
                placeholder="Enter Your Title"
                className={styles.searchBar}
                onChange={handleObj}
              />

              <button className={styles.save}>save</button>
            </div>
          </form>
        )}

        {arr.map((ele, i) => (
          <div className={styles.cont}>
            <div className={styles.display} key={i}>
              <div className={styles.item}>
                <div
                  className={styles.text}
                  key={i}
                  onClick={() => handleOpen(i)}
                >
                  {ele.title}
                </div>
              </div>

              <div className={styles.del}>
                <button onClick={() => handleDel(i)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>

              <button onClick={genratePDF} className={styles.down}>
                <i class="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
