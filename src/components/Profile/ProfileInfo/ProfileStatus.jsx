import React from 'react';

class ProfileStatus extends React.Component {
   
    state = {
        editMode: false,
        status: this.props.status
        }

    activateEditMode =() =>{
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode =() =>{
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    //изменение статуса 
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
        
    }
/*Компонент монтируется один раз. А потом, когда в нём меняется 
локальный стейт либо кто-то извне хочет перерисовать компонент и 
закинуть в него новые пропсы.. То срабатывает метод жизненного цикла 
componentDidMount
*/



    componentDidUpdate(prevProps, prevState){
        if(prevProps.status!== this.props.status){
            this.setState({
                status: this.props.status
            })
       }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "-----"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/*blur срабатывает если элемент в фокусе*/}

                            <input 
                            onChange ={this.onStatusChange}
                            autoFocus ={true} 
                            onBlur ={this.deactivateEditMode}
                             value={this.state.status} /> 
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;