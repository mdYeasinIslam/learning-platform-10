import React from 'react';

const Faq = () => {
    return (
        <div>
            <div  tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4">
                <div className="collapse-title font-semibold text-xl">
                    What is CORS?
                </div>
                <div className="collapse-content">
                    <p>CORs means Cross-origin resource sharing.Its a method of  Express.js which enables controlled access to resources located outside of a given domain.   </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4">
                <div className="collapse-title font-semibold text-xl">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited.  </p>
                    <p>In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4">
                <div className="collapse-title font-semibold text-xl">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it.  </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title font-semibold text-xl">
                    What is Node?How does it works?
                </div>
                <div className="collapse-content">
                    <p>Node is a way to show or runs JavaScript code  directly in a  browser instead  computer process itself.</p>
                    <p>Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Faq;