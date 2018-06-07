// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';                      // Default Header
import { Footer } from '../Footer/Footer';                      // Default Footer
import { HomePage } from '../pages/01HomePage';                   // HomePage
import { CollectionPage } from '../pages/02CollectionPage';       // CoolectionPage
import { CoursesPage } from '../pages/03CoursesPage';             // Course List Page
import { CartPage } from '../pages/04CartPage';                   // Cart Page
import { CheckoutPage } from '../pages/05CheckoutPage';           // Checkout Page
import { BlogListPage } from '../pages/06BlogListPage';           // Blog List Page
import { BlogSinglePage } from '../pages/07BlogSinglePage';       // Blog Single Page
import { AboutPage } from '../pages/08AboutPage';                 // About Page
import { CareersPage } from '../pages/09CareersPage';             // Careers Page
import { SupportPage } from '../pages/10SupportPage';             // Support Page
import { AffiliatePage } from '../pages/11AffiliatePage';         // Affiliate Page
import { TopicsPage } from '../pages/12TopicsPage';               // Topics Page
import { SearchPage } from '../pages/13SearchPage';               // Search Page

// Busicess account pages
import { BusinessHomePage } from '../pages/14BusinessHomePage';                               // Business Home Page
import { BusinessSetupPage } from '../pages/15BusinessSetupPage';                             // Business Setup Page (pick 2 topics)
import { BusinessOrganizationPage } from '../pages/16BusinessOrganizationPage';               // Business Organization Page
import { BusinessAccountDashboardPage } from '../pages/17BusinessAccountDashboardPage';       // Business Account Dashboard Page
import { BusinessInviteNewUserPage } from '../pages/18BusinessInviteNewUserPage';             // Business Invite New User Page
import { BusinessImportUsersFromCsvPage } from '../pages/19BusinessImportUsersFromCsvPage';   // Business Import Users from CSV
import { BusinessExportUsersToCsvPage } from '../pages/20BusinessExportUsersToCsvPage';       // Business Export Users to CSV
import { BusinessInvitationStatusPage } from '../pages/21BusinessInvitationStatusPage';       // Business Invitation Status Page (pending, accepted)
import { BusinessOrgAndDomainSettingPage } from '../pages/22BusinessOrgAndDomainSettingPage'; // Business Organizations and Domian setting Page
import { BusinessLogoSettingPage } from '../pages/23BusinessLogoSettingPage';                 // Business Logo Setting Page
import { BusinessIconSettingPage } from '../pages/24BusinessIconSettingPage';                 // Business Icon Setting Page
import { BusinessBackgroundSettingPage } from '../pages/25BusinessBackgroundSettingPage';     // Business Background Setting Page
import { BusinessBillingPage }  from '../pages/26BusinessBillingPage';                        // Business Billing Page
import { BusinessMyCoursesPage } from '../pages/27BusinessMyCoursesPage';                     // Business My courses Page
import { BusinessCoursePage } from '../pages/28BusinessCoursePage';                           // Business Single Course Page

// Instructor account Pages
import { InstructorHomePage } from '../pages/29InstructorHomePage';                           // Instructor Home Page
import { InstructorAccountDashboardPage } from '../pages/30InstructorAccountDashboardPage';   // Instructor Dashboard Page
import { InstructorNotificationsPage } from '../pages/31InstructorNotificationsPage';         // Instructor Notifications Page
import { InstructorCreateCoursePage } from '../pages/32InstructorCreateCoursePage';           // Instructor Create Course Page
import { InstructorCourseSettingPage } from '../pages/33InstructorCourseSettingPage';         // Instructor Course Setting Page
import { InstructorMyCoursesPage } from '../pages/34InstructorMyCoursesPage';                 // Instructor My Courses Page (course list)
import { InstructorProfilePage } from '../pages/35InstructorProfilePage';                     // Instructor Profile Page
import { InstructorMessagesPage } from '../pages/36InstructorMessagesPage';                   // Instructor Messages Page
import { InstructorCreditHistoryPage } from '../pages/37InstructorCreditHistoryPage';         // Instructor Credit History Page
import { InstructorPurchaseHistoryPage } from '../pages/38InstructorPurchaseHistoryPage';     // Instructor Purchase History Page

// Others
import { TermsPage } from '../pages/39TermsPage';                 // Terms of Use Page
import { PrivacyPage } from '../pages/40PrivacyPage';             // Privacy and Policy Page
import { ApiAgreementPage } from '../pages/41ApiAgreementPage';         // API Agreement Page
import { BusinessAgreementPage } from '../pages/42BusinessAgreementPage';     // Business Agreement Page
import { BusinessPrivacyStatementPage } from '../pages/43BusinessPrivacyStatementPage';       // Business Privacy Statement Page
import { InstructorAgreementPage } from '../pages/44InstructorAgreementPage';                 // Instructor Agreement Page
import { AffiliateTermsPage } from '../pages/45AffiliateTermsPage';           // Affiliate Terms and Conditions Page
import { CreditsProgramPage } from '../pages/46CreditsProgramPage';           // Credit Program Page
import { PricingPolicyPage } from '../pages/47PricingPolicyPage';             // Pricing and Promotions Policy
import { LiveChatDashboardPage } from '../pages/48LiveChatDashboardPage';           // Live Chat Dashboard Page
import { LiveStreamingPage } from '../pages/49LiveStreamingPage';                   // Live Streaming Page

// additional pages
import { BusinessSigninPage } from '../pages/50BusinessSigninPage';           // Business Sign In Page
import { BusinessSignupPage } from '../pages/51BusinessSignupPage';           // Business Sign Up Page
import { InstructorSigninPage } from '../pages/52InstructorSigninPage';       // Instructor Sign In Page
import { InstructorSignupPage } from '../pages/53InstructorSignupPage';       // Instructor Sign Up Page

import { Sitemap } from '../pages/Sitemap';
import { ZipCodesPage } from '../pages/ZipCodesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/collections' component={CollectionPage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/cart' component={CartPage} />
                <Route path='/checkout' component={CheckoutPage} />
                <Route path='/blog' component={BlogListPage} />
                <Route path='/blog/signle' component={BlogSinglePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/careers' component={CareersPage} />
                <Route path='/support' component={SupportPage} />
                <Route path='/affiliate' component={AffiliatePage} />
                <Route path='/topics' component={TopicsPage} />
                <Route path='/search' component={SearchPage} />
                <Route path='/business' component={BusinessHomePage} />
                <Route path='/business/setup' component={BusinessSetupPage} />
                <Route path='/business/organization' component={BusinessOrganizationPage} />
                <Route path='/business/dashboard' component={BusinessAccountDashboardPage} />
                <Route path='/business/invite' component={BusinessInviteNewUserPage} />
                <Route path='/business/import' component={BusinessImportUsersFromCsvPage} />
                <Route path='/business/export' component={BusinessExportUsersToCsvPage} />
                <Route path='/business/invite/status' component={BusinessInvitationStatusPage} />
                <Route path='/business/setting/domain' component={BusinessOrgAndDomainSettingPage} />
                <Route path='/business/setting/logo' component={BusinessLogoSettingPage} />
                <Route path='/business/setting/icon' component={BusinessIconSettingPage} />
                <Route path='/business/setting/background' component={BusinessBackgroundSettingPage} />
                <Route path='/business/billing' component={BusinessBillingPage} />
                <Route path='/business/courses' component={BusinessMyCoursesPage} />
                <Route path='/business/courses/single' component={BusinessCoursePage} />
                <Route path='/instructor' component={InstructorHomePage} />
                <Route path='/instructor/dashboard' component={InstructorAccountDashboardPage} />
                <Route path='/instructor/notification' component={InstructorNotificationsPage} />
                <Route path='/instructor/course/create' component={InstructorCreateCoursePage} />
                <Route path='/instructor/course/setting' component={InstructorCourseSettingPage} />
                <Route path='/instructor/course/list' component={InstructorMyCoursesPage} />
                <Route path='/instructor/profile' component={InstructorProfilePage} />
                <Route path='/instructor/message' component={InstructorMessagesPage} />
                <Route path='/instructor/history/credit' component={InstructorCreditHistoryPage} />
                <Route path='/instructor/history/purchase' component={InstructorPurchaseHistoryPage} />
                <Route path='/terms' component={TermsPage} />
                <Route path='/terms/privacy' component={PrivacyPage} />
                <Route path='/terms/api/agreement' component={ApiAgreementPage} />
                <Route path='/terms/business/agreement' component={BusinessAgreementPage} />
                <Route path='/terms/business/privacy' component={BusinessPrivacyStatementPage} />
                <Route path='/terms/instructor/agreement' component={InstructorAgreementPage} />
                <Route path='/terms/affiliate' component={AffiliateTermsPage} />
                <Route path='/terms/creditprogram' component={CreditsProgramPage} />
                <Route path='/terms/promotionpolicy' component={PricingPolicyPage} />
                <Route path='/livechat' component={LiveChatDashboardPage} />
                <Route path='/livechat/streaming' component={LiveStreamingPage} />
                <Route path='/business/signin' component={BusinessSigninPage} />
                <Route path='/business/signup' component={BusinessSignupPage} />
                <Route path='/instructor/signin' component={InstructorSigninPage} />
                <Route path='/instructor/signup' component={InstructorSignupPage} />
                <Route path='/sitemap' component={Sitemap} />

                <Route path='/zipcodes' component={ZipCodesPage} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
);