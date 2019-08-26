import React, {useState} from 'react';
import './App.css';

function App() {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDsc] = useState("");
  const [gender, setGender] = useState(0);
  const [lang, setLang] = useState("vi");
  const [status, setStatus] = useState(false);

  function onHandleChange(e) {
    console.log(e)
    switch (e.target.name) {
      case 'userName':
        setName(e.target.value);
        break;
    
      case 'passWord':
        setPassword(e.target.value);
        break;
      case 'description':
        setDsc(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      case 'lang':
        setLang(e.target.value);
        break;
      case 'status':
        setStatus(e.target.checked);
        break;
      default:
      break;
    }
  }
  function onHandleSubmit(e) {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    console.log(gender);
    console.log(lang);
    console.log(status);
  }
  return (
    <div className="container mt-50">
      <div className="row">
        <div className="col-sm-8 col-xs-8 col-md-8">
          <div className="panel panel-primary">
            <div className="panel-heading">Form</div>
            <div className="panel-body">
              <form onSubmit={e => onHandleSubmit(e)}>
                <div className="form-group">
                  <label>Username:</label>
                  <input type="text" name="userName" className="form-control" value={userName}
                        onChange={
                        e =>  onHandleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="passWord" className="form-control" value={password}
                          onChange={
                            e => onHandleChange(e)
                          }/>
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea type="text" name="description" className="form-control" value={description}
                          onChange= {
                            e => onHandleChange(e)
                          } />
                </div>
                <select className="form-control" name="gender" value={gender}
                        onChange={
                          e => onHandleChange(e)
                        }>
                  <option value={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
                <br/>
                <label>Ngôn ngữ</label>
                <div className="radio">
                  <label>
                    <input type="radio" name="lang" value={"en"}
                          onChange={
                            e => onHandleChange(e)
                          } 
                          checked={lang === "en"}/>
                    Tiếng Anh
                  </label>
                  <br/>
                  <label>
                    <input type="radio" name="lang" value={"vi"}
                          onChange={
                            e => onHandleChange(e)
                          }
                          checked={lang === "vi"} />
                    Tiếng Việt
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="status" value={status} 
                          onChange={e => onHandleChange(e)}
                          checked={status === true} />
                    Trạng thái
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                <button type="reset" className="btn btn-default">Xóa trắng</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
