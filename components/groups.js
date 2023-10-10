// In returnGroup.js
import componentStyles from '../styles/module.css/components.module.css';

const ReturnGroup = (name, DynamicComponent, link, theData) => {
    return (
        <div className={componentStyles.group}>
            <div className={componentStyles.head}>
                <article>
                    <span>{name}</span>
                    <div className={componentStyles.line} />
                </article>
                <aside>
                    <a href={link}>
                        view all <span>-&gt;</span>
                    </a>
                </aside>
            </div>
            <DynamicComponent theData={theData} />
        </div>
    );
};

export default ReturnGroup;
