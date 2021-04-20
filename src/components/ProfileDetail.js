const ProfileDetail = ({title, dates, duties, company}) => {
    return (
        <div className="profile-detail">
            <div className="profile-title">
                <h2>{title}</h2>
            </div>
            <div className="profile-name">{company}</div>
            <div className="period">
                {dates}
            </div>
            <div className="experiences">

            {
                duties.map((duty,index) => {
                    return(
                        <div className="exp-detail" key={index}>
                    <div className="exp-icon">
                    <i className="fas fa-forward"></i>
                    </div>
                    <div className="exp-desc">
                    {duty}
                    </div>
                </div>
                    )
                })
            }

            </div>
        </div>
    );
}

export default ProfileDetail;