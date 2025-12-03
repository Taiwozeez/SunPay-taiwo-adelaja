"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

interface Notification {
  id: number
  message: string
  time: string
  type: 'payment' | 'offer' | 'wallet' | 'subscription' | 'security' | 'info'
  read: boolean
}

interface NotificationBoardProps {
  dropdownOpen: boolean
  notifications: Notification[]
  onMarkAsRead: (id: number) => void
}

export default function NotificationBoard({ dropdownOpen, notifications, onMarkAsRead }: NotificationBoardProps) {
  const router = useRouter()

  // Notification Icon Component
  const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
    switch (type) {
      case 'payment':
        return (
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )
      case 'offer':
        return (
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
          </svg>
        )
      case 'wallet':
        return (
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
        )
      case 'subscription':
        return (
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        )
      case 'security':
        return (
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
      case 'info':
        return (
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  return (
    <AnimatePresence>
      {dropdownOpen && (
        <motion.div
          className="fixed sm:absolute right-4 left-4 sm:right-0 sm:left-auto sm:transform-none mt-2 w-auto min-w-[280px] max-w-[calc(100vw-2rem)] sm:max-w-[90vw] sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
          style={{
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            maxHeight: 'calc(100vh - 100px)',
          }}
        >
          <div className="p-0 flex flex-col h-full">
            {/* Notifications Header with Yellow Theme */}
            <div className="flex justify-between items-center p-4 bg-yellow-500 rounded-t-lg">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                {notifications.filter(n => !n.read).length} new
              </span>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto max-h-64 sm:max-h-80 notification-scrollbar">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-yellow-50 ${
                    notif.read ? 'bg-white' : 'bg-yellow-50'
                  }`}
                  onClick={() => onMarkAsRead(notif.id)}
                >
                  <div className="flex items-start gap-3">
                    {/* Notification Icon */}
                    <div className={`p-2 rounded-full ${notif.read ? 'bg-gray-100' : 'bg-yellow-100'}`}>
                      <NotificationIcon type={notif.type} />
                    </div>

                    {/* Notification Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-sm font-medium ${notif.read ? 'text-gray-700' : 'text-gray-900'}`}>
                            {notif.message}
                          </h4>
                          {!notif.read && (
                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {notif.time}
                        </span>
                      </div>
                      
                      {/* Notification Type Badge */}
                      <div className="mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          notif.type === 'payment' ? 'bg-green-100 text-green-800' :
                          notif.type === 'offer' ? 'bg-yellow-100 text-yellow-800' :
                          notif.type === 'wallet' ? 'bg-blue-100 text-blue-800' :
                          notif.type === 'subscription' ? 'bg-orange-100 text-orange-800' :
                          notif.type === 'security' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notifications Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
              <button
                onClick={() => router.push("/notifications")}
                className="w-full text-sm text-yellow-600 hover:text-yellow-800 font-medium flex items-center justify-center gap-2 group py-2"
              >
                View All Notifications
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}