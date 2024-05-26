// In ReturnGroup.js
import componentStyles from '../styles/module.css/components.module.css';

const ReturnGroup = ({name, DynamicComponent, theData, expandedSection, changeExpanded }) => {
    return (
        <div className={componentStyles.group}>
            <div className={componentStyles.head}>
                <article>
                    <span>{name}</span>
                    <div className={componentStyles.line} />
                </article>
                <aside>
                    {
                        name!=='ABOUT ME' &&(
                            <i onClick={()=>changeExpanded(name)}>
                                view all <span>-&gt;</span>
                            </i>
                        )
                    }
                </aside>
            </div>
            <DynamicComponent name={name} theData={theData} expandedSection={expandedSection}/>
        </div>
    );
};

export default ReturnGroup;
