"use client"

import { useState, useEffect, useRef } from "react"

// Define notification interface
interface Notification {
  id: number
  message: string
  time: string
  type: 'payment' | 'offer' | 'wallet' | 'subscription' | 'security' | 'info'
  read: boolean
}

const notifications: Notification[] = [
  { 
    id: 1, 
    message: "Payment Successful", 
    time: "2 min ago",
    type: 'payment',
    read: false
  },
  { 
    id: 2, 
    message: "New Offer Available", 
    time: "1 hour ago",
    type: 'offer',
    read: false
  },
  { 
    id: 3, 
    message: "Wallet Credited", 
    time: "3 hours ago",
    type: 'wallet',
    read: true
  },
  { 
    id: 4, 
    message: "Subscription Due", 
    time: "1 day ago",
    type: 'subscription',
    read: false
  },
  { 
    id: 5, 
    message: "Security Alert", 
    time: "2 days ago",
    type: 'security',
    read: false
  },
  { 
    id: 6, 
    message: "System Update Completed", 
    time: "3 days ago",
    type: 'info',
    read: true
  },
]

// Create a type for the global function
declare global {
  interface Window {
    stopNotifications?: () => void
  }
}

// Notification Icon Component with Yellow Theme
const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  const baseClass = "w-5 h-5"
  
  switch (type) {
    case 'payment':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'offer':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    case 'wallet':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    case 'subscription':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'security':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    case 'info':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    default:
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
  }
}

export default function NotificationSystem() {
  const [currentNotif, setCurrentNotif] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [done, setDone] = useState(false)
  const [notificationList, setNotificationList] = useState<Notification[]>(notifications)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  /*
  // COMMENTED OUT: Auto pop-out one-by-one on load
  useEffect(() => {
    if (!notificationList.length) return
    
    let index = 0
    setAnimating(true)

    intervalRef.current = setInterval(() => {
      setAnimating(false)
      setTimeout(() => {
        index += 1
        if (index < notificationList.length) {
          setCurrentNotif(index)
          setAnimating(true)
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setDone(true)
        }
      }, 400)
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [notificationList])
  */

  // Stop notifications when component unmounts or user interacts
  const stopNotifications = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      setDone(true)
    }
  }

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
    console.log(`Notification ${id} marked as read`)
  }

  // View notification details
  const viewNotification = (id: number) => {
    markAsRead(id)
    console.log(`Viewing notification ${id} details`)
    // Add your navigation logic here
  }

  // Export function to stop notifications from header
  useEffect(() => {
    // Make stop function available globally for header to call
    window.stopNotifications = stopNotifications
    return () => {
      delete window.stopNotifications
    }
  }, [])

  // Get current notification
  const currentNotification = notificationList[currentNotif]

  // COMMENTED OUT: Return null to hide the popout notifications
  // if (done || !currentNotification) return null
  return null

  /*
  // COMMENTED OUT: Notification popout component
  return (
    <div className="fixed top-20 right-6 w-80 z-50">
      <div
        className={`bg-white border border-yellow-200 shadow-xl rounded-lg text-sm transition-all duration-500 ${
          animating ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{
          boxShadow: '0 10px 25px -5px rgba(251, 191, 36, 0.1), 0 10px 10px -5px rgba(251, 191, 36, 0.04)'
        }}
      >
        <div className="p-0">
          <div className="flex justify-between items-center p-4 bg-yellow-500 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-600 rounded-full">
                <NotificationIcon type={currentNotification.type} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">New Notification</h3>
              </div>
            </div>
            <button
              onClick={stopNotifications}
              className="text-gray-900 hover:text-black ml-2 p-1 rounded-full hover:bg-yellow-600 transition-colors"
              aria-label="Close notification"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-full ${currentNotification.read ? 'bg-gray-100' : 'bg-yellow-100'}`}>
                <NotificationIcon type={currentNotification.type} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className={`text-sm font-medium ${currentNotification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                    {currentNotification.message}
                  </h4>
                  {!currentNotification.read && (
                    <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2 flex-shrink-0"></div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{currentNotification.time}</p>
                
                <div className="mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    currentNotification.type === 'payment' ? 'bg-green-100 text-green-800' :
                    currentNotification.type === 'offer' ? 'bg-yellow-100 text-yellow-800' :
                    currentNotification.type === 'wallet' ? 'bg-blue-100 text-blue-800' :
                    currentNotification.type === 'subscription' ? 'bg-orange-100 text-orange-800' :
                    currentNotification.type === 'security' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {currentNotification.type.charAt(0).toUpperCase() + currentNotification.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => viewNotification(currentNotification.id)}
                className="flex items-center gap-2 text-sm text-yellow-600 hover:text-yellow-800 font-medium transition-colors group"
              >
                View Details
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => markAsRead(currentNotification.id)}
                  className="text-xs text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Mark as read
                </button>
                <button
                  onClick={() => console.log("Open all notifications")}
                  className="text-xs text-yellow-600 hover:text-yellow-800 px-3 py-1 rounded-md hover:bg-yellow-50 transition-colors flex items-center gap-1"
                >
                  View All
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="h-1 bg-yellow-100 rounded-b-lg overflow-hidden">
            <div 
              className="h-full bg-yellow-500 transition-all duration-3000 ease-linear"
              style={{ 
                width: animating ? '100%' : '0%',
                animation: animating ? 'progress 3s linear forwards' : 'none'
              }}
            />
            <style jsx>{`
              @keyframes progress {
                from { width: 100%; }
                to { width: 0%; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
  */
}