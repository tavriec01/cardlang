import React from 'react';

export default function Cards() {
  return (
    <div className="cardpage">
        <div className="card_table">
            <div className="card plus"></div>
        </div>
        <div className="form">
            <form action="">
                <div className="input">
                    URL:
                    <input type="text" />
                </div>
                <div className="input">
                    Word:
                    <input type="text" />
                </div>
                <div className="input">
                    <button>Add</button>
                </div>
            </form>
        </div>
    </div>
  );
}
