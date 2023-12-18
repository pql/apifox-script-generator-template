import {
  adminAppVersionListGet,
  adminCommonCaptchaImageGet,
  adminLoginPost,
} from "@/api/index";

(async () => {
  const { data } = await adminCommonCaptchaImageGet();
  const { img, uuid } = data;

  const svgElement = document.createElement("div");
  svgElement.innerHTML = img;

  const inputElement = document.createElement("input");
  inputElement.setAttribute("id", "ipt");

  const buttonElement = document.createElement("button");
  buttonElement.append("登录");
  buttonElement.onclick = async () => {
    const inputElement: any = document.getElementById("ipt");
    const code = inputElement.value;
    const loginRes: any = await adminLoginPost({
      loginName: "17317225420",
      password: "123456",
      code: code,
      uuid: uuid,
    });
    const token: string = loginRes.data.token;
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", token);
      console.log(token);
    }
  };

  document.body.append(svgElement);
  document.body.append(inputElement);
  document.body.append(buttonElement);

  const res = await adminAppVersionListGet();
  console.log(res.data);
})();
