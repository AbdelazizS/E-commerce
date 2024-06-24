<script setup>
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar.vue'
import { Settings2Icon } from 'lucide-vue-next'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '../components/Footer.vue'
import { Bell, Heart, Languages, LogOut, User } from 'lucide-vue-next'
// import { Badge } from '@/components/ui/badge'
</script>

<template>
    <!--  -->
    <Navbar />

    <BottomNav>
        {{ $t('home.nav.profile') }}
    </BottomNav>

    <Container>
        <div class="py-8 mb-8">

            <div class="flex gap-8 flex-col lg:flex-row">
                <div class="w-full lg:max-w-xs ">
                    <div class="flex items-center  gap-4 px-4 py-6 lg:py-6 bg-muted rounded-md shadow-sm border h-24">
                        <!-- Avatar -->
                        <div
                            class="flex justify-center items-center w-14 h-14 shadow-md rounded-full border-4 overflow-hidden border-card bg-primary/50">
                            <div class="font-bold">
                                A
                            </div>
                        </div>

                        <!-- user data -->
                        <div class="">
                            <h3 class="text-xl text-foreground relative font-bold leading-6">Abdelaziz</h3>
                            <p class="text-ltr text-sm text-muted-foreground">abdelazizjared@acme.inc</p>
                        </div>


                    </div>
                </div>

                <div class="w-full md:max-w-xl space-y-10 ">
                    <!--
// v0 by Vercel.
// https://v0.dev/t/iMKt6CqrmJw
-->

                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-md"
                        data-v0-t="card">
                        <div class="flex flex-col p-6 space-y-1">
                            <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">Update Password</h3>
                            <p class="text-sm text-muted-foreground">
                                Enter your current password and a new password to update your account.
                            </p>
                        </div>
                        <div class="p-6">
                            <form class="space-y-4">
                                <div class="relative space-y-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="currentPassword">
                                        Current Password
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password" id="currentPassword" placeholder="Enter your current password"
                                        required="" />
                                    <button
                                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span class="sr-only">Toggle password visibility</span>
                                    </button>
                                </div>
                                <div class="relative space-y-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="newPassword">
                                        New Password
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password" id="newPassword" placeholder="Enter a new password"
                                        required="" />
                                    <button
                                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span class="sr-only">Toggle password visibility</span>
                                    </button>
                                </div>
                                <div class="relative space-y-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="confirmPassword">
                                        Confirm New Password
                                    </label>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password" id="confirmPassword" placeholder="Confirm your new password"
                                        required="" />
                                    <button
                                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground absolute bottom-1 right-1 h-7 w-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span class="sr-only">Toggle password visibility</span>
                                    </button>
                                </div>
                                <button
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    type="submit">
                                    Update Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </Container>



    <Footer />
</template>