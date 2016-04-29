import React, {PropTypes} from 'react'
import ApplicationListItem from '../src/ApplicationListItem.js';

export default React.createClass({
    render: function () {
        var items = this.props.applications.map(function (application) {
            return (
                <ApplicationListItem key={application.id} application={application} />
            );
        });
        return (
          <div className="applications container">
            <div className="row">
              {items}
            </div>
          </div>
        );
    }
});
