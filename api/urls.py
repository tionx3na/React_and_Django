from django.urls import path, include
# from . import views
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('articles/', views.ArticleList.as_view()),
    # path('articles/<int:id>', views.ArticleDetails.as_view()),
    # path('articles', views.article_list),
    # path('articles/<int:pk>', views.article_details)
]
