from .views import QuoteViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'quotes', QuoteViewSet, basename='quote')

urlpatterns = router.urls
