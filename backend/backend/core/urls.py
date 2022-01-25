from django.urls import path, include
from . import views

app_name = 'core'

user_urls = [
    path('all', views.UserListAPIView.as_view(), name='list'),
    path('new', views.RegisterUserAPIView.as_view(), name='create'),
    path('<int:pk>', views.UserProfileAPIView.as_view(), name='profile'),
    path('<int:pk>/update', views.UserUpdateAPIView.as_view(), name='update'),
    path('<int:pk>/delete', views.UserDeleteAPIView.as_view(), name='delete'),
]

urlpatterns = [
    path('login', views.UserTokenObtainPairView.as_view(), name='login'),
    path('refresh', views.UserTokenRefreshView.as_view(), name='refresh'),
    path('users/', include((user_urls, 'users'), namespace='users')),
]
