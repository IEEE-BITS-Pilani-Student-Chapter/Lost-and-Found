import React from "react";
import '../CSS-Components/Developer_Card.css'

export default function Developer_Card() {

    // developer card for each developer
    return (
        <div className="dev_card" id="dev_card">
            
            {/* image */}
            <img className="dev_img" id="dev_img" src="data:image/png;base64,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" alt="" />

            {/* name */}
            <div className="dev_name" id="dev_name">ABC</div>

            {/* role */}
            <div className="dev_dept" id="dev_dept">Front/Backend Developer</div>

            {/* social media handle */}
            <div className="dev_accounts" id="dev_accounts">

                {/* github */}
                <a href="#" id="dev_github"><svg viewBox="0 0 16 16" width="24" height="24" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg></a>

                {/* linkedin */}
                <a href="#" id="dev_linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg></a>
            </div>
        </div>
    )
}