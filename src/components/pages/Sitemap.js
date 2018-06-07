// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORT IMAGES


// COMPONENT

const Sitemap = () => (
    <main>
        <ul>
            <li><NavLink to='/' activeClassName='menu selected' exact={true}>Homepage</NavLink></li>
            <li><NavLink to='/collections' activeClassName='menu selected' exact={true}>CollectionPage</NavLink></li>
            <li><NavLink to='/courses' activeClassName='menu selected' exact={true}>CoursesPage</NavLink></li>
            <li><NavLink to='/cart' activeClassName='menu selected' exact={true}>CartPage</NavLink></li>
            <li><NavLink to='/checkout' activeClassName='menu selected' exact={true}>CheckoutPage</NavLink></li>
            <li><NavLink to='/blog' activeClassName='menu selected' exact={true}>BlogListPage</NavLink></li>
            <li><NavLink to='/blog/signle' activeClassName='menu selected' exact={true}>BlogSinglePage</NavLink></li>
            <li><NavLink to='/about' activeClassName='menu selected' exact={true}>AboutPage</NavLink></li>
            <li><NavLink to='/careers' activeClassName='menu selected' exact={true}>CareersPage</NavLink></li>
            <li><NavLink to='/support' activeClassName='menu selected' exact={true}>SupportPage</NavLink></li>
            <li><NavLink to='/affiliate' activeClassName='menu selected' exact={true}>AffiliatePage</NavLink></li>
            <li><NavLink to='/topics' activeClassName='menu selected' exact={true}>TopicsPage</NavLink></li>
            <li><NavLink to='/search' activeClassName='menu selected' exact={true}>SearchPage</NavLink></li>
            <li><NavLink to='/business' activeClassName='menu selected' exact={true}>BusinessHomePage</NavLink></li>
            <li><NavLink to='/business/setup' activeClassName='menu selected' exact={true}>BusinessSetupPage</NavLink></li>
            <li><NavLink to='/business/organization' activeClassName='menu selected' exact={true}>BusinessOrganizationPage</NavLink></li>
            <li><NavLink to='/business/dashboard' activeClassName='menu selected' exact={true}>BusinessAccountDashboardPage</NavLink></li>
            <li><NavLink to='/business/invite' activeClassName='menu selected' exact={true}>BusinessInviteNewUserPage</NavLink></li>
            <li><NavLink to='/business/import' activeClassName='menu selected' exact={true}>BusinessImportUsersFromCsvPage</NavLink></li>
            <li><NavLink to='/business/export' activeClassName='menu selected' exact={true}>BusinessExportUsersToCsvPage</NavLink></li>
            <li><NavLink to='/business/invite/status' activeClassName='menu selected' exact={true}>BusinessInvitationStatusPage</NavLink></li>
            <li><NavLink to='/business/setting/domain' activeClassName='menu selected' exact={true}>BusinessOrgAndDomainSettingPage</NavLink></li>
            <li><NavLink to='/business/setting/logo' activeClassName='menu selected' exact={true}>BusinessLogoSettingPage</NavLink></li>
            <li><NavLink to='/business/setting/icon' activeClassName='menu selected' exact={true}>BusinessIconSettingPage</NavLink></li>
            <li><NavLink to='/business/setting/background' activeClassName='menu selected' exact={true}>BusinessBackgroundSettingPage</NavLink></li>
            <li><NavLink to='/business/billing' activeClassName='menu selected' exact={true}>BusinessBillingPage</NavLink></li>
            <li><NavLink to='/business/courses' activeClassName='menu selected' exact={true}>BusinessMyCoursesPage</NavLink></li>
            <li><NavLink to='/business/courses/single' activeClassName='menu selected' exact={true}>BusinessCoursePage</NavLink></li>
            <li><NavLink to='/instructor' activeClassName='menu selected' exact={true}>InstructorHomePage</NavLink></li>
            <li><NavLink to='/instructor/dashboard' activeClassName='menu selected' exact={true}>InstructorAccountDashboardPage</NavLink></li>
            <li><NavLink to='/instructor/notification' activeClassName='menu selected' exact={true}>InstructorNotificationsPage</NavLink></li>
            <li><NavLink to='/instructor/course/create' activeClassName='menu selected' exact={true}>InstructorCreateCoursePage</NavLink></li>
            <li><NavLink to='/instructor/course/setting' activeClassName='menu selected' exact={true}>InstructorCourseSettingPage</NavLink></li>
            <li><NavLink to='/instructor/course/list' activeClassName='menu selected' exact={true}>InstructorMyCoursesPage</NavLink></li>
            <li><NavLink to='/instructor/profile' activeClassName='menu selected' exact={true}>InstructorProfilePage</NavLink></li>
            <li><NavLink to='/instructor/message' activeClassName='menu selected' exact={true}>InstructorMessagesPage</NavLink></li>
            <li><NavLink to='/instructor/history/credit' activeClassName='menu selected' exact={true}>InstructorCreditHistoryPage</NavLink></li>
            <li><NavLink to='/instructor/history/purchase' activeClassName='menu selected' exact={true}>InstructorPurchaseHistoryPage</NavLink></li>
            <li><NavLink to='/terms' activeClassName='menu selected' exact={true}>TermsPage</NavLink></li>
            <li><NavLink to='/terms/privacy' activeClassName='menu selected' exact={true}>PrivacyPage</NavLink></li>
            <li><NavLink to='/terms/api/agreement' activeClassName='menu selected' exact={true}>ApiAgreementPage</NavLink></li>
            <li><NavLink to='/terms/business/agreement' activeClassName='menu selected' exact={true}>BusinessAgreementPage</NavLink></li>
            <li><NavLink to='/terms/business/privacy' activeClassName='menu selected' exact={true}>BusinessPrivacyStatementPage</NavLink></li>
            <li><NavLink to='/terms/instructor/agreement' activeClassName='menu selected' exact={true}>InstructorAgreementPage</NavLink></li>
            <li><NavLink to='/terms/affiliate' activeClassName='menu selected' exact={true}>AffiliateTermsPage</NavLink></li>
            <li><NavLink to='/terms/creditprogram' activeClassName='menu selected' exact={true}>CreditsProgramPage</NavLink></li>
            <li><NavLink to='/terms/promotionpolicy' activeClassName='menu selected' exact={true}>PricingPolicyPage</NavLink></li>
            <li><NavLink to='/livechat' activeClassName='menu selected' exact={true}>LiveChatDashboardPage</NavLink></li>
            <li><NavLink to='/livechat/streaming' activeClassName='menu selected' exact={true}>LiveStreamingPage</NavLink></li>
            <li><NavLink to='/business/signin' activeClassName='menu selected' exact={true}>BusinessSigninPage</NavLink></li>
            <li><NavLink to='/business/signup' activeClassName='menu selected' exact={true}>BusinessSignupPage</NavLink></li>
            <li><NavLink to='/instructor/signin' activeClassName='menu selected' exact={true}>InstructorSigninPage</NavLink></li>
            <li><NavLink to='/instructor/signup' activeClassName='menu selected' exact={true}>InstructorSignupPage</NavLink></li>
        </ul>
    </main>
);

export { Sitemap };