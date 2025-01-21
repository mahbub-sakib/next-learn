import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Your password" }
            },

            async authorize(credentials) {

                const { email, password } = credentials;
                if (!credentials) {
                    return null;
                }

                if (email) {

                    // const currentUser = users.find((user) => user.email === email)
                    // console.log(currentUser);

                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email });
                    console.log(currentUser);

                    if (currentUser) {
                        if (currentUser.password === password) {
                            // console.log(currentUser.image);
                            return currentUser;

                            // return {
                            //     id: currentUser.id,
                            //     name: currentUser.name,
                            //     email: currentUser.email,
                            //     image: currentUser.image, // Ensure image is included
                            //     type: currentUser.type,
                            // };
                        }
                    }
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                // console.log('dhukse1');
                token.type = user.type;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;

            }
            // if (user) {
            //     // Include user properties in the token
            //     // console.log('dhukse2');
            //     token.name = user.name;
            //     token.email = user.email;
            //     token.image = user.image;
            //     token.type = user.type;
            // }
            // if (token) {
            // console.log('dhukse3');
            // token.name = user.name;
            // token.email = user.email;
            // token.image = user?.image;
            // token.type = user.type;
            // }
            return token
        },
        async session({ session, user, token }) {
            // console.log('dhukse4');
            session.user.type = token.type;


            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.image;
            session.user.type = token.type;
            return session;
        },
    }


}

const handler = NextAuth(authOptions)

// const users = [
//     {
//         id: 1,
//         name: "sakib",
//         email: "s@gmail.com",
//         password: "password",
//         type: "admin",
//         image: "https://picsum.photos/seed/picsum/200/300"
//     },
//     {
//         id: 2,
//         name: "abony",
//         email: "a@gmail.com",
//         password: "123456",
//         type: "moderator",
//         image: "https://picsum.photos/seed/picsum/200/300"
//     }
// ]

export { handler as GET, handler as POST }