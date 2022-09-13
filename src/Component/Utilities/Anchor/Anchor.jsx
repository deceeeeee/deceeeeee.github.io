import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import CursorContext from "../../../Context/CursorContext";
import NavigationContext from "../../../Context/NavigationContext";

import './Anchor.scss';


const Anchor = (props) => {
    let path = props.path;
    let linkClass = props.className;
    let label = props.label;
    let withUnderline = props.withUnderline;
    
    let cursor = useContext(CursorContext);
    let navigation = useContext(NavigationContext);

    const mouseEvent = (eventType) => {
        cursor.cursorEvent(eventType);
    }

    const navigate = (path) => {
        if(path !== '/interior') {
            navigation.convertLogo(false);
        }

        navigation.getCurrentPath(path);
    }

    return props.enabled ? (
        <Link to={path} 
            onMouseDown={   (event) => mouseEvent('mousedown')                      }
            onMouseUp={     (event) => mouseEvent('mouseup')                        }
            onMouseEnter={  (event) => mouseEvent('mouseenter')                     }
            onMouseLeave={  (event) => mouseEvent('mouseleave')                     } 
            onMouseOver={   (event) => mouseEvent('mouseover')                      }
            onMouseOut={    (event) => mouseEvent('mouseout')                       }
            onClick={       (event) => navigate(path)                               } 
            className={     linkClass + (withUnderline ? " with-underline fade-in" : "")    }
        >
            { label }
        </Link>
    ) : (
        <span className={linkClass}>
            {label}
        </span>
    );
}

Anchor.defaultProps = {
    label: "",
    path: "/",
    className: "",
    enabled: true,
    withUnderline: false
}

export default Anchor;