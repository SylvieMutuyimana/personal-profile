import componentStyles from '../styles/module.css/components.module.css'
const returnGroup = (name, callBack, link) => {
    return(
        <div className={componentStyles.group}>
            <div className={componentStyles.head}>
                <article>
                    <span>{name}</span>
                    <div className={componentStyles.line}/>
                </article>
                <aside>
                    <a href={link}>
                        view all <span>-&gt;</span>
                    </a>
                </aside>
            </div>
            {callBack()}
        </div>
    )
};

export default returnGroup;
