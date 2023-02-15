import React from 'react'
import Index from '../pages/index'
import {Switch,Route} from 'react-router-dom'

//app
import userProfile from '../pages/app/user-profile';
import electorate from '../pages/app/electorate';
import UserPrivacySetting from '../pages/app/user-privacy-setting';
import FriendProfile from '../pages/app/friend-profile';

import Chat from '../pages/app/chat';
import Notification from '../pages/app/notification';
import File from '../pages/app/file'
import FriendRequest from '../pages/app/friend-request'
import Todo from '../pages/app/todo';
import UserAccountSetting from '../pages/app/user-account-setting';

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";


// extrapages
import Faq from '../pages/extrapages/faq'
import PrivacyPolicy from '../pages/extrapages/privacy-policy';
import TermsofService from '../pages/extrapages/terms-of-service';
import BlankPage from '../pages/extrapages/blankpage';

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadeUp" timeout={300}>
                <Switch>
                    <Route path="/"  exact component={Index} />

                    {/* app */}
                    <Route path="/profile"                  component={userProfile} />
					<Route path="/electorate"                  component={electorate} />
                    <Route path="/user-privacy-setting"     component={UserPrivacySetting}/>
                    <Route path="/friend-profile"           component={FriendProfile} />
                    <Route path="/chat"                     component={Chat} />
                    <Route path="/notification"             component={Notification}/>
                    <Route path="/file"                     component={File}/>
                    <Route path="/friend-request"           component={FriendRequest}/>
                    <Route path="/todo"                     component={Todo}/>
                    <Route path="/user-account-setting"     component={UserAccountSetting}/>
                     
                    {/* extrapages */}
                    <Route path="/faq"         component={Faq}/>
                    <Route path="/privacy-policy"    component={PrivacyPolicy}/>
                    <Route path="/terms-of-service"  component={TermsofService}/>
                    <Route path="/blankpage"  component={BlankPage}/>

                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
