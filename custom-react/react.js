const customRender=(ele,con)=>{
    const newElement=document.createElement(ele.type);
    newElement.innerHTML=ele.children;
    for (const prop in ele.props) {
        newElement.setAttribute(prop,ele.props[prop]);
    }
    con.append(newElement);
}

const reactElement={
    type : 'a',
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'visit google'
}





const container=document.getElementById('root');

customRender(reactElement,container);
