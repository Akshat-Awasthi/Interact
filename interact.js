function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                if (typeof child === 'object') {
                    return child;
                } else if (typeof child === 'string' || typeof child === 'number') {
                    return createTextElement(child);
                } else {
                    throw new Error('Invalid child type');
                }
            })
        }
    }
}

function createTextElement(text){
    return{
        type: "TEXT_ELEMENT",
        props:{
            nodeValue: text,
            children: [],
        },
    }
}

function render(element, container){
    const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode(element.props.nodeValue) : document.createElement(element.type);
    const isProps = key => key !== "children";
    Object.keys(element.props).filter(isProps).forEach(name => {dom[name] = element.props[name]})
    element.props.children.forEach(child => {
        render(child, dom);
    });
    container.appendChild(dom);
}

const interact = {
    createElement,
    render,
};

/** @jsx interact.createElement */
const element = (
    <div>
    <h1>Hello world from interact</h1>
    <h2 style="text-align:right"> from Akshat Awasthi</h2>
    </div>
)

const container = document.getElementById("root");
interact.render(element, container);