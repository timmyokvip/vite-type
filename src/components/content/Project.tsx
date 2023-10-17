import { Button, Modal } from "antd";
import { useState } from "react";
import img from "@/assets/img/svg/camera-diaphragm.svg";

interface IProject {
  image: string;
  // image: JSX.Element;
  title: string;
  description: string;
  detail: {
    description: string;
    technology: string;
    member: string;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  const dataProjects: IProject[] = [
    {
      image: img,
      title: "Web clone shoppee",
      description:
        "Web design is a similar process of creation, with   the intention of presenting the content on electronic pages ...",
      detail: {
        description: "1",
        technology: "2",
        member: "3",
        role: "4",
        demo: "5",
        github: "6",
      },
    },
    {
      image: img,
      title: "Web clone zzzzz",
      description:
        "Web design is a similar process of creation, with   the intention of presenting the content on  electronic pages ...",
      detail: {
        description: "11111111",
        technology: "3333",
        member: "22222",
        role: "4",
        demo: "5",
        github: "6",
      },
    },
  ];

  return (
    <i>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>{dataDetail.detail.description}</li>
            <li>{dataDetail.detail.technology}</li>
            <li>{dataDetail.detail.member}</li>
          </ul>
        )}
      </Modal>

      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Meet our amazing Project</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li
                      key={`${index}-project`}
                      onClick={() => {
                        setDataDetail(item);
                        setIsModalOpen(true);
                      }}
                    >
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src={item.image}
                            alt="camera-diaphragm"
                          />
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </i>
  );
};

export default Project;
