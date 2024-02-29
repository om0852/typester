"use client";
import "../../../sass/profile/profile.scss";
export default function Profile() {
    return (
        <>
            <div className="main-profile-container">
                <div className="main-profile-section">
                    <div className="profile-details-container">
                        <div className="profile-image"></div>
                        <div className="profile-username">om0852</div>
                        <div className="profile-userfulllname">OM sachin salunke</div>
                        <div className="profile-level">21</div>
                        <div className="profile-editbutton"><button>Edit Profile</button></div>
                    </div>
                    <div className="profile-result-container">
                        <div className="latest-result-section">
                            <div className="result-title">Last 3 Matches</div>
                            <div className="result-card-container">
                                <div className="result-card">
                                    <p>win
                                        Accuraccy</p>
                                    <p>
                                        playername
                                    </p>

                                </div>
                                <div className="result-card">
                                    <p>win
                                        Accuraccy</p>
                                    <p>
                                        playername
                                    </p>

                                </div>
                                <div className="result-card">
                                    <p>win
                                        Accuraccy</p>
                                    <p>
                                        playername
                                    </p>

                                </div>
                                <div className="result-card">
                                    <p>win
                                        Accuraccy</p>
                                    <p>
                                        playername
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="profile-calender"></div>
                    </div>
                </div>

            </div>
        </>
    )
}