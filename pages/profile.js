import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/nicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followerList = [{nickname:'블루'},{nickname:'옐로우'},{nickname:'레드'}];
    const followingList = [{nickname:'블루'},{nickname:'옐로우'},{nickname:'레드'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
};

export default Profile;