import React, { useCallback, useState, useContext } from "react";
import { Button, Modal } from "antd";
import StudentContext from "../../../store/StudentContext";
import StudentAdd from "../StudentAdd/index";
import style from "./index.module.css";

export default function StudentList(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModify, setIsModify] = useState(false);
  const ctx = useContext(StudentContext);
  const deleteFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `http://localhost:1337/api/students/${props.item.id}`,
        {
          method: "delete",
        }
      );
      if (res.ok) {
        ctx.fetchData();
      } else {
        setError("删除出错！");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const handleOk = () => {
    setIsModalVisible(true);
    deleteFetch();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteHandle = () => {
    setIsModalVisible(true);
  };
  const modifyHandle = () => {
    setIsModify(true);
  };
  return (
    <>
      {!isModify && (
        <div className={style.content}>
          {!loading && (
            <>
              <div>
                <h2>{props.item.attributes.name}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.sex}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.age}</h2>
              </div>
              <div>
                <h2>{props.item.attributes.address}</h2>
              </div>
              <div className={style.width}>
                <Button type="primary" onClick={deleteHandle} danger>
                  删除
                </Button>
                <Button type="primary" onClick={modifyHandle}>
                  修改
                </Button>
              </div>
              <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确认"
                cancelText="取消"
              >
                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "500",
                    marginTop: "10px",
                  }}
                >
                  确定删除吗？
                </h3>
              </Modal>
            </>
          )}
          {loading && !error && <p>数据正在删除...</p>}
          {error && <p>{error}</p>}
        </div>
      )}
      {isModify && (
        <StudentAdd
          isModify={isModify}
          setIsModify={setIsModify}
          data={props.item}
        />
      )}
    </>
  );
}
